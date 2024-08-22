import React from "react";

import { midia_data } from "@/data/midia-data";
import Link from "next/link";

const Midia: React.FC = () => {
  return (
    <ul
      className="
      flex
      gap-[20px]
      text-[#fff]
      text-[24px]
      font-bold
      items-center
    "
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
