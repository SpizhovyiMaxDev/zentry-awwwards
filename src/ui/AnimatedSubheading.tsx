import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface AnimatedSubheadingProps {
  subHeading: string;
  className?: string;
}

function AnimatedSubheading({
  subHeading,
  className,
}: AnimatedSubheadingProps) {
  const subHeadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const subHeading = subHeadingRef.current;
    if (!subHeading) return;
    const ctx = gsap.context(() => {}, subHeading);
    const subHeadingAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: subHeading,
        start: "center 90%",
        end: "center 90%",
        toggleActions: "play none reverse none",
      },
    });

    subHeadingAnimation.to("#animated-word", {
      opacity: 1,
      transform: "translateX(0)",
      ease: "power2.inOut",
      stagger: 0.05,
    });

    return ctx.revert();
  }, []);

  return (
    <div
      ref={subHeadingRef}
      className={clsx(
        className,
        "font-general flex gap-2 text-sm uppercase md:text-[10px]",
      )}
    >
      {subHeading.split(" ").map((word, i) => {
        return (
          <span
            key={i}
            id="animated-word"
            className="transform:translateX(10px) opacity-0"
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}

export default AnimatedSubheading;
