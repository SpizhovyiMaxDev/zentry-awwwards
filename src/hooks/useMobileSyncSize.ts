import { useEffect, useState, useCallback } from "react";

export function useMobileSyncSize(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    let timeoutId: number;

    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= 636);
      }, 100);
    };
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 636);

    const debouncedResize = handleResize();
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [handleResize]);

  return isMobile;
}
