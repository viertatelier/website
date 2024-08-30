import React from "react";
import { Logo, Navigation, Midia, Hamburguer } from "@/components";
import { useApp } from "@/context/AppContext";

const Header: React.FC = () => {
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
          {!menuOpen && <Hamburguer />}
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
        <Logo />
      </div>
      {isDesktop && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Navigation />
        </div>
      )}

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Midia />
      </div>
    </header>
  );
};

export default Header;
