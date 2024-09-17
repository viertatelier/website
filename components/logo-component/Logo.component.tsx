import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  lightMode?: "light" | "dark";
};

const Logo: React.FC<LogoProps> = ({ lightMode = "light" }) => {
  return (
    <div
      className="relative max-w-[228px] max-h-[58px] w-full h-full"
      style={{ aspectRatio: 3.93 }}
    >
      <Link href="/" className="w-full h-full flex">
        <Image
          src={`/assets/brand/logo${lightMode === "dark" ? "-dark" : ''}.svg`}
          alt="logo"
          fill
        />
      </Link>
    </div>
  );
};

export default Logo;
