import type { ReactElement, ReactNode } from "react";
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
  //bg-violet-50 text-black
  return (
    <button
      id={id}
      className={clsx(
        containerClass,
        "group font-general relative w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3",
      )}
    >
      {leftIcon} {children} {rightIcon}
    </button>
  );
}

export default Button;
