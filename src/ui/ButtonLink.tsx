import { useRef, useState, type ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  type: "dummy" | "link";
};

function ButtonLink({ children, type, ...props }: ButtonLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLSpanElement | null>(null);

  return (
    <a
      {...props}
      className={`cursor-pointer ${type === "dummy" ? "text-gray-800" : ""} ${isActive && type !== "dummy" ? "text-white" : ""} relative`}
      onClick={(e) => e.preventDefault()}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {type !== "dummy" && (
        <span
          className={`absolute top-1/2 left-1/2 h-[2rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-black transition-all duration-300 ${
            isActive ? "skew-x-10 -skew-y-2 opacity-100" : "opacity-0"
          }`}
          style={{
            width: contentRef.current
              ? `${contentRef.current.offsetWidth + 30}px`
              : "auto",
          }}
        />
      )}
      <span className="relative z-10" ref={contentRef}>
        {children}
      </span>
    </a>
  );
}

export default ButtonLink;
