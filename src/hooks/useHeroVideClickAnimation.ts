import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

export function useHeroVideoClickAnimation(
  hasClicked: boolean,
  nextVideoRef: RefObject<HTMLVideoElement | null>,
  currIndex: number,
  setBgIndex: (idx: number) => void,
  setDisableClick: (disabled: boolean) => void,
) {
  useGSAP(
    () => {
      if (hasClicked && nextVideoRef.current) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          borderRadius: "0",
          duration: 0.75,
          onStart: () => {
            nextVideoRef.current?.play();
          },
          onComplete: () => {
            setBgIndex(currIndex);
            setDisableClick(false);
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 0.75,
        });
      }
    },
    { dependencies: [currIndex], revertOnUpdate: true },
  );
}
