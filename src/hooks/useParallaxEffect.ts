import { useRef, type MouseEvent } from "react";

interface ParallaxSettings {
  tiltX: number;
  tiltY: number;
  perspective: number;
  transitionDuration?: number;
  resetOnLeave?: boolean;
}

export function useParallaxEffect<T extends HTMLElement>(
  settings: ParallaxSettings,
) {
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

    const newTransform = `perspective(${settings.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    target.style.transform = newTransform;
  }

  function handleMouseLeave() {
    if (!settings.resetOnLeave) return;

    const target = targetRef.current;
    if (!target) return;

    const newTransform = `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg)`;
    target.style.transform = newTransform;
  }

  return {
    containerRef,
    targetRef,
    handleMouseMove,
    handleMouseLeave,
  };
}
