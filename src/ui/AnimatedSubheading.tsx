import clsx from "clsx";
import { useAnimatedSubheading } from "../hooks/useAnimatedSubheading";

interface AnimatedSubheadingProps {
  subHeading: string;
  className?: string;
}

function AnimatedSubheading({
  subHeading,
  className,
}: AnimatedSubheadingProps) {
  const { subHeadingRef } = useAnimatedSubheading();

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
          <span key={i} className="animated-subheading-word opacity-0">
            {word}
          </span>
        );
      })}
    </div>
  );
}

export default AnimatedSubheading;
