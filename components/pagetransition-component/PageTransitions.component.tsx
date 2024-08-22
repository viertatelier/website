// components/PageTransition.tsx
import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const pageTransitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleStart = () => {
      if (pageTransitionRef.current) {
        const tl = gsap.timeline();
        // Animação de saída
        tl.to(pageTransitionRef.current, {
          opacity: 0,
          scale: 0.8,
          y: 50,
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    };

    const handleComplete = () => {
      if (pageTransitionRef.current) {
        const tl = gsap.timeline();
        // Animação de entrada
        tl.fromTo(
          pageTransitionRef.current,
          { opacity: 0, scale: 0.8, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.inOut" }
        );
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  return <div ref={pageTransitionRef}>{children}</div>;
}
