import clsx from "clsx";
import { useAnimatedTitle } from "../hooks/useAnimatedTitle";

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

function AnimatedTitle({ title, containerClass }: AnimatedTitleProps) {
  const { containerRef } = useAnimatedTitle();

  return (
    <div
      ref={containerRef}
      className={clsx(
        "xs:text-6xl flex flex-col gap-1 text-4xl leading-[.8] text-white uppercase sm:px-32 md:text-7xl md:text-[6rem]",
        containerClass,
      )}
    >
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
