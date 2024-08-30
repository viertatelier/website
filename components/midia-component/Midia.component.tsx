import React from "react";

import { midia_data } from "@/data/midia-data";
import Link from "next/link";

type MidiaItem = {
  lightMode?: "light" | "dark";
};

const Midia: React.FC<MidiaItem> = ({ lightMode = "light" }) => {
  return (
    <ul
      className={`
      flex
      gap-[20px]
      text-[${lightMode === "light" ? "#fff" : "#000"}]
      text-[24px]
      font-bold
      items-center
    `}
    >
      {midia_data.map((midia) => (
        <Link target="blank" href={midia.link} key={midia.id}>
          <li>{midia.icon}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Midia;
