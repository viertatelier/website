import React from "react";
import { navigation_data } from "@/data/navigation-data";
import styles from "./Navigation.module.scss";
import gsap from "gsap";
import localFont from "next/font/local";

const canelaFont = localFont({
  src: "../../styles/fonts/canela/CanelaText-LightItalic-Trial.otf",
});


const Navigation: React.FC = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const submenu = e.currentTarget.querySelector("ul");

    if (submenu) {
      gsap.to(submenu, {
        autoAlpha: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
      submenu.classList.add(styles.submenuVisible);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    const submenu = e.currentTarget.querySelector("ul");

    if (submenu) {
      gsap.to(submenu, {
        autoAlpha: 0,
        y: -10,
        duration: 0.3,
        ease: "power3.inOut",
      });
      submenu.classList.remove(styles.submenuVisible);
    }
  };

  return (
    <nav>
      <ul className={styles.list}>
        {navigation_data.map((navigation) => (
          <li
            key={navigation.id}
            className={styles.listItem}
            onMouseEnter={navigation.submenu ? handleMouseEnter : undefined}
            onMouseLeave={navigation.submenu ? handleMouseLeave : undefined}
            data-no-blobity
          >
            <a className="uppercase text-white" href={navigation.url} data-no-blobity>
              {navigation.title}
            </a>
            {navigation.submenu && (
              <ul className={styles.submenu}>
                {navigation.submenu.map((subItem) => (
                  <li key={subItem.id}  data-no-blobity>
                    <a href={subItem.url}  data-no-blobity className={canelaFont.className}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
