import clsx from "clsx";
import { useAnimatedTitle } from "../hooks/useAnimatedTitle";

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
  className?: string;
}

function AnimatedTitle({
  title,
  containerClass,
  className,
}: AnimatedTitleProps) {
  const { containerRef } = useAnimatedTitle();

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative flex flex-col gap-1 leading-[.8] uppercase",
        containerClass,
      )}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className={clsx(
            className,
            "flex max-w-full flex-wrap items-center justify-center gap-2 md:gap-3",
          )}
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-title-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AnimatedTitle;
