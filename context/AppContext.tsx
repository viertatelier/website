"use client";

import { getNextCollection } from "@/utils/getNextCollection";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";

type ContextProps = {
  device: {
    isMobile: boolean;
    isDesktop: boolean;
  };
  setDevice: React.Dispatch<
    React.SetStateAction<{
      isMobile: boolean;
      isDesktop: boolean;
    }>
  >;
  activeBackground: {
    collection: "yellow" | "gray" | "black" | "mixed";
    index: number;
  };
  setActiveBackground: React.Dispatch<
    React.SetStateAction<{
      collection: "yellow" | "gray" | "black" | "mixed";
      index: number;
    }>
  >;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext({} as ContextProps);

export function AppProvider({ children }: { children: ReactNode }) {
  const [device, setDevice] = useState<{
    isMobile: boolean;
    isDesktop: boolean;
  }>({
    isMobile: false,
    isDesktop: false,
  });
  const [activeBackground, setActiveBackground] = useState<{
    collection: "yellow" | "gray" | "black" | "mixed";
    index: number;
  }>({
    collection: "yellow",
    index: 0,
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const checkWidth = () => {
    setDevice({
      isMobile: window.innerWidth <= 1023,
      isDesktop: window.innerWidth >= 1024,
    });
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const contextValue = useMemo(
    () => ({
      device,
      setDevice,
      activeBackground,
      setActiveBackground,
      menuOpen,
      setMenuOpen,
    }),
    [
      device,
      setDevice,
      activeBackground,
      setActiveBackground,
      menuOpen,
      setMenuOpen,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
