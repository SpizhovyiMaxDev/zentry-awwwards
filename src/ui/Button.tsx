import { useState, type ReactElement, type ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  buttonClass?: string;
  backgroundClass?: string;
}

function Button({
  leftIcon,
  rightIcon,
  buttonClass,
  backgroundClass = "bg-white",
  children,
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={clsx(
        "group font-general relative w-fit cursor-pointer px-7 py-3",
        buttonClass,
      )}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className={clsx(
          backgroundClass,
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
