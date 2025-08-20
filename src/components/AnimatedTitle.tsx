import { useGSAP } from "@gsap/react";
import clsx from "clsx";

interface AnimatedTitleProps {
  title: string;
  containerClass: string;
}

function AnimatedTitle({ title, containerClass }: AnimatedTitleProps) {
  useGSAP(function () {});

  return (
    <div
      className={clsx(
        containerClass,
        "mt-5 text-center text-4xl leading-[0.8] uppercase md:text-[6rem]",
      )}
    >
      {title.split("<br/>").map((line, i) => {
        return (
          <div
            key={i}
            className="flex-center max-w-fullflex-wrap gap-2 p-10 md:gap-3"
          >
            {line.split(" ").map((word, i) => {
              return (
                <span
                  key={i}
                  className="animated-word"
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default AnimatedTitle;
