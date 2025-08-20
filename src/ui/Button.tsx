import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  id: string;
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
  return (
    <button
      id={id}
      className={clsx(
        containerClass,
        "group font-general relative w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
      )}
    >
      {leftIcon} {children} {rightIcon}
    </button>
  );
}

export default Button;
