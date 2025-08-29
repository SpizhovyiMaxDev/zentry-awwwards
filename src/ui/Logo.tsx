interface LogoProps {
  variant?: "white" | "black";
  containerClassName?: string;
  imgClassName?: string;
  alt?: string;
}

function Logo({
  variant = "white",
  containerClassName = "",
  imgClassName = "h-full w-full",
  alt,
}: LogoProps) {
  const logoSrc =
    variant === "white" ? "/img/logo-white.webp" : "/img/logo-black.webp";
  const defaultAlt = variant === "white" ? "Zentry logo" : "Zentry logo";

  return (
    <div className={containerClassName}>
      <img src={logoSrc} alt={alt || defaultAlt} className={imgClassName} />
    </div>
  );
}

export default Logo;
