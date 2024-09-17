import React, { useEffect, useRef } from "react";
import { navigation_data } from "@/data/navigation-data";
import styles from "./Navigation.module.scss";
import gsap from "gsap";
import localFont from "next/font/local";
import { useApp } from "@/context/AppContext";
import { Hamburguer } from "../hamburguer-component";

const canelaFont = localFont({
  src: "../../styles/fonts/canela/CanelaText-LightItalic-Trial.otf",
});

type NavigationItem = {
  lightMode?: "light" | "dark";
};

const Navigation: React.FC<NavigationItem> = ({lightMode = 'light'}) => {
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
            <a
              className={`uppercase text-[${lightMode === "light" ? "#fff" : "#000"}]`}
              href={navigation.url}
              data-no-blobity
            >
              {navigation.title}
            </a>
            {navigation.submenu && (
              <ul className={styles.submenu}>
                {navigation.submenu.map((subItem) => (
                  <li key={subItem.id} data-no-blobity>
                    <a
                      href={subItem.url}
                      data-no-blobity
                      className={canelaFont.className}
                      style={{
                        color: lightMode === "light" ? "#fff" : "#000",
                      }}
                    >
                      {subItem.title}
                    </a>
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

const NavigationMobile: React.FC<NavigationItem> = ({lightMode}) => {
  const { menuOpen, setMenuOpen } = useApp();

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 1,
        x: 0,
        visibility: "visible",
        ease: "power3.inOut",
      });
    } else {
      const tl = gsap.timeline();
      tl.to(menuRef.current, {
        x: "-100%", // Primeiro move completamente para fora da tela
        ease: "power3.inOut",
        duration: 0.5, // Duração da animação de saída
      })
        .to(menuRef.current, {
          opacity: 0, // Depois começa a reduzir a opacidade
          duration: 0.2, // A opacidade diminui rapidamente após a transição de x
          ease: "power3.inOut",
        })
        .set(menuRef.current, { visibility: "hidden" }); // Finalmente, seta o visibility para "hidden"
    }
  }, [menuOpen]);

  return (
    <nav
      ref={menuRef}
      className={`${styles.mobile} ${menuOpen ? styles.open : ""}`}
    >
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "35px",
            zIndex: 9999,
          }}
        >
          <Hamburguer lightMode={lightMode} />
        </div>
      )}
      <ul>
        {navigation_data.map((navigation) => (
          <li key={navigation.id}>
            <a
              href={navigation.url}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {navigation.title}
            </a>
            {navigation.submenu && (
              <ul className={styles.submenu}>
                {navigation.submenu.map((submenuItem) => (
                  <li key={submenuItem.id}>
                    <a
                      href={submenuItem.url}
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                    >
                      {submenuItem.title}
                    </a>
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

export { Navigation, NavigationMobile };
