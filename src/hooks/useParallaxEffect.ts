import { useRef, type MouseEvent } from "react";

interface ParallaxSettings {
  tiltX: number; // Maximum tilt in degrees for X axis
  tiltY: number; // Maximum tilt in degrees for Y axis
  perspective: number; // CSS perspective value
  transitionDuration?: number; // CSS transition duration in ms
  resetOnLeave?: boolean; // Whether to reset transform on mouse leave
}

export function useParallaxEffect(settings: ParallaxSettings) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

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
