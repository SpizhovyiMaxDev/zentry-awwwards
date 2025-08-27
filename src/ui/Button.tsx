import { useState, type ReactElement, type ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  id?: string;
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  containerClass?: string;
}

function Button({
  id,
  leftIcon,
  rightIcon,
  containerClass,
  children,
}: ButtonProps) {
  const btnBackground = containerClass
    ? (containerClass.split(" ").find((s) => s.includes("bg-")) ?? "bg-white")
    : "bg-white";

  const filteredContainerClass = containerClass
    ? containerClass
        .split(" ")
        .filter((s) => !s.includes("bg-"))
        .join(" ")
    : "";

  const [isActive, setIsActive] = useState(false);

  return (
    <button
      id={id}
      className={clsx(
        "group font-general relative w-fit cursor-pointer px-7 py-3",
        filteredContainerClass,
      )}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className={clsx(
          btnBackground,
          "preserve-3d absolute top-0 left-0 z-0 size-full rounded-2xl transition-transform duration-500",
          isActive ? "rotate-x-12" : "rotate-x-0",
        )}
      />
      <div className="relative z-10 flex items-center justify-center gap-1">
        {leftIcon} {children} {rightIcon}
      </div>
    </button>
  );
}

export default Button;
