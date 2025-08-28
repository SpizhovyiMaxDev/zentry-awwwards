import type { ReactNode } from "react";

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
}

function ButtonLink({ children, ...props }: ButtonLinkProps) {
  return (
    <a {...props} onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  );
}

export default ButtonLink;
