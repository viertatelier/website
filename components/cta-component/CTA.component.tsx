import React from "react";

type CTAProps = {
  text?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  mxAuto?: boolean;
};

const CTA: React.FC<CTAProps> = ({
  href = "",
  onClick,
  text = "EU QUERO",
  variant = "primary",
  className,
  mxAuto = false,
}) => {
  const primaryVariant = "text-white border border-white ";
  const secondaryVariant = "text-black border border-black hover:text-white hover:bg-black";

  const container_className = `
        ${variant === "primary" ? primaryVariant : secondaryVariant}
        font-bold py-[1.48vh] md:py-[2.22vh] px-[3.33vw] rounded
        transition duration-300 ease-in-out
      w-full
      flex 
      justify-center items-center
      max-w-[250px]
      md:max-w-[350px]
      ${mxAuto && "mx-auto"}
      uppercase
      ${className}`;

  if (href) {
    return (
      <a className={container_className} href={href}>
        <span className="text-wrap">{text}</span>
      </a>
    );
  } else {
    return (
      <button className={container_className} onClick={onClick}>
        <span className="text-wrap">{text}</span>
      </button>
    );
  }
};

export default CTA;
