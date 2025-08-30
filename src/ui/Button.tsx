import { useState, type ReactElement, type ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  buttonClass?: string;
  backgroundClass?: string;
}

function extractBackgroundClasses(className: string | undefined): {
  backgroundClasses: string;
  hoverBackgroundClasses: string;
  remainingClasses: string;
} {
  if (!className) {
    return {
      backgroundClasses: "",
      hoverBackgroundClasses: "",
      remainingClasses: "",
    };
  }

  const classes = className.split(" ");
  const backgroundClasses = classes
    .filter((cl) => cl.includes("bg-") && !cl.includes("hover:"))
    .join(" ");
  const hoverBackgroundClasses = classes
    .filter((cl) => cl.includes("hover:bg-"))
    .map((cl) => cl.replace("hover:", ""))
    .join(" ");
  const remainingClasses = classes
    .filter((cl) => !cl.includes("bg-") || cl.includes("hover:text-"))
    .join(" ");

  return { backgroundClasses, hoverBackgroundClasses, remainingClasses };
}

function Button({
  leftIcon,
  rightIcon,
  buttonClass,
  backgroundClass = "bg-white",
  children,
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const { backgroundClasses, hoverBackgroundClasses, remainingClasses } =
    extractBackgroundClasses(buttonClass);
  const finalBackgroundClass = backgroundClasses || backgroundClass;

  //px-7 py-3
  return (
    <button
      className={clsx(
        "group font-general relative w-fit cursor-pointer",
        remainingClasses,
      )}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className={clsx(
          finalBackgroundClass,
          "preserve-3d absolute top-0 left-0 z-0 size-full rounded-2xl transition-all duration-500",
          isActive ? clsx("rotate-x-12", hoverBackgroundClasses) : "rotate-x-0",
        )}
      />
      <div className="relative z-20 flex items-center justify-center gap-1">
        {leftIcon} {children} {rightIcon}
      </div>
    </button>
  );
}

export default Button;
