import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface AnimatedTitleProps {
  title: string;
  containerClass: string;
}

function AnimatedTitle({ title, containerClass }: AnimatedTitleProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(function () {
    const container = containerRef.current;
    if (!container) return;
    const ctx = gsap.context(() => {}, container);
    const titleAnimaton = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "100 bottom",
        end: "100 bottom",
        toggleActions: "play none none reverse",
      },
    });

    titleAnimaton.to(".animated-word", {
      opacity: 1,
      transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
      ease: "power2.inOut",
      stagger: 0.05,
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AnimatedTitle;
