"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchorElement = target.closest("a");

      if (anchorElement && anchorElement.getAttribute("href")?.startsWith("#")) {
        event.preventDefault();
        const id = anchorElement.getAttribute("href")!.substring(1);
        const element = document.getElementById(id);

        if (element) {
          lenis?.scrollTo(element);
        } else {
          const base_url =
            process.env.NEXT_PUBLIC_STAGE === "DEV"
              ? process.env.NEXT_PUBLIC_DEV_URL
              : process.env.NEXT_PUBLIC_PRD_URL;
          const url = `${base_url}#${id}`;
          window.location.href = url;
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        lenis?.scrollTo(element);
      }
    }
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
