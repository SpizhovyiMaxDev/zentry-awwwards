import { useRef, type MouseEvent } from "react";
import { useMobileSyncSize } from "./useMobileSyncSize";

interface ParallaxSettings {
  tiltX: number;
  tiltY: number;
  perspective: number;
  transitionDuration?: number;
  resetOnLeave?: boolean;
  isTranslating?: boolean;
}

export function useParallaxEffect<T extends HTMLElement>(
  settings: ParallaxSettings,
) {
  const isMobile = useMobileSyncSize();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<T | null>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const { top, left, width, height } = container.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * settings.tiltX;
    const tiltY = (relativeX - 0.5) * settings.tiltY;

    target.style.transform = !isMobile
      ? `
      perspective(${settings.perspective}px) 
      rotateX(${tiltX}deg) rotateY(${tiltY}deg) 
      ${settings.isTranslating ? `translate3d(${tiltY * 3}px, ${-tiltX * 3}px, 0px)` : ""}
    `
      : "";
  }

  function handleMouseLeave() {
    if (!settings.resetOnLeave) return;

    const target = targetRef.current;
    if (!target) return;

    target.style.transform = !isMobile
      ? `
    perspective(${settings.perspective}px) 
    rotateX(0deg) 
    rotateY(0deg) 
    ${settings.isTranslating ? "translate3d(0px, 0px, 0px)" : ""}`
      : "";
  }

  return {
    containerRef,
    targetRef,
    handleMouseMove,
    handleMouseLeave,
  };
}
