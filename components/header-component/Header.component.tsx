import React from "react";
import { Logo, Navigation, Midia, Hamburguer } from "@/components";
import { useApp } from "@/context/AppContext";

type HeaderProps = {
  lightMode?: "light" | "dark";
};


const Header: React.FC<HeaderProps> = ({lightMode}) => {
  const {
    device: { isDesktop },
    menuOpen,
  } = useApp();

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    window.location.href = "/";
  };


  return (
    <header
      className={`
        flex
        justify-between
        items-center
        w-full
        `}
      style={{
        padding: "35px 35px",
        paddingRight: isDesktop ? "55px" : "35px",
        paddingBottom: "0",
      }}
    >
      {!isDesktop && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {!menuOpen && <Hamburguer lightMode={lightMode} />}
        </div>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: isDesktop ? "flex-start" : "center",
          zIndex: 9999,
        }}
        onClick={handleLogoClick}
      >
        <Logo lightMode={lightMode}  />
      </div>
      {isDesktop && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Navigation lightMode={lightMode} />
        </div>
      )}

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Midia lightMode={lightMode} />
      </div>
    </header>
  );
};

export default Header;
