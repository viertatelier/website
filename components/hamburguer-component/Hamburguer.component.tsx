import { useApp } from "@/context/AppContext";
import React from "react";

const Hamburguer: React.FC = () => {
  const { menuOpen, setMenuOpen } = useApp();

  return (
    <div
      className="
    flex flex-col
    justify-between
    align-center
    w-[32px] h-[22px]
    cursor-pointer
    z-50
    "
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div
        className="
            w-full h-[4px] bg-[#fff]
            transition-all duration-300
        "
        style={{
          transform: menuOpen
            ? "rotate(45deg) translate(5px, 5px)"
            : "rotate(0) translate(0, 0)",
        }}
      ></div>
      <div
        className="
            w-full h-[4px] bg-[#fff]
            transition-all duration-300
        "
        style={{
          opacity: menuOpen ? 0 : 1,
        }}
      ></div>
      <div
        className="
            w-full h-[4px] bg-[#fff]
            transition-all duration-300
        "
        style={{
          transform: menuOpen
            ? "rotate(-45deg) translate(8px, -8px)"
            : "rotate(0) translate(0, 0)",
        }}
      ></div>
    </div>
  );
};

export default Hamburguer;
