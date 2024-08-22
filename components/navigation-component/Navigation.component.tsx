import React from "react";
import { navigation_data } from "@/data/navigation-data";
import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {navigation_data.map((navigation) => (
          <li key={navigation.id}>
            <a
              className="uppercase text-white"
              href={navigation.url}
            >
              {navigation.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
