import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div
      className="relative max-w-[228px] max-h-[58px] w-full h-full"
      style={{ aspectRatio: 3.93 }}
    >
      <Link href="/" className="w-full h-full flex">
        <Image src="/assets/brand/logo.svg" alt="logo" layout="fill" fetchPriority='high' />
      </Link>
    </div>
  );
};

export default Logo;
