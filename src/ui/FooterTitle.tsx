interface FooterTitleProps {
  text: string;
  className?: string;
}

function FooterTitle({ text, className = "" }: FooterTitleProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <p className="font-zentry block text-center text-[33dvw] leading-none tracking-tight text-black uppercase">
        {text}
      </p>
    </div>
  );
}

export default FooterTitle;
