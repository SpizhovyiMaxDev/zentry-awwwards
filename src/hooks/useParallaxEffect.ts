import { useRef, type MouseEvent } from "react";

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

    let newTransform = `perspective(${settings.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

    if (settings.isTranslating) {
      newTransform += ` translate3d(${tiltY}px, ${tiltX}px, 0px)`;
    }

    target.style.transform = newTransform;
  }

  function handleMouseLeave() {
    if (!settings.resetOnLeave) return;

    const target = targetRef.current;
    if (!target) return;

    let newTransform = `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg)`;

    if (settings.isTranslating) {
      newTransform += ` translate3d(0px, 0px, 0px)`;
    }

    target.style.transform = newTransform;
  }

  return {
    containerRef,
    targetRef,
    handleMouseMove,
    handleMouseLeave,
  };
}
