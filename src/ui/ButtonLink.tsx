import type { ReactNode } from "react";

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
}

function ButtonLink({ children, ...props }: ButtonLinkProps) {
  return <a {...props}>{children}</a>;
}

export default ButtonLink;
