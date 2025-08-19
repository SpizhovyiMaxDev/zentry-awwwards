import type { ReactElement, ReactNode } from "react";

interface ButtonProps {
  id: string;
  children: ReactNode;
  leftIcon?: ReactElement;
  containerClass: string;
}

function Button({ id, leftIcon, containerClass, children }: ButtonProps) {
  return (
    <button
      id={id}
      className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black`}
    >
      {leftIcon} {children}
    </button>
  );
}

export default Button;
