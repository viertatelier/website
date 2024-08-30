import { useApp } from "@/context/AppContext";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { background_data } from "@/data/background-data";
import { getNextCollection } from "@/utils/getNextCollection";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";

type BackgroundProps = {
  imagePos: "center" | "top";
};

const Background: React.FC<BackgroundProps> = ({ imagePos = "center" }) => {
  const {
    device: { isDesktop },
    activeBackground,
    setActiveBackground,
  } = useApp();

  const imageContainerRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const activeCollection = pathname.includes("/collection/")
    ? (pathname.split("/collection/")[1].split("-")[0] as "festas" | "noivas")
    : undefined;

  useEffect(() => {
    if (!activeBackground) {
      setActiveBackground(() => ({
        collection: getNextCollection("yellow", activeCollection),
        index: 0,
      }));
    }
  }, [activeBackground, setActiveBackground, activeCollection]);

  const fadeAnimation = useCallback(() => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
          setActiveBackground((prev) => ({
            collection: getNextCollection(
              prev?.collection ?? "yellow",
              activeCollection
            ),
            index: prev?.index === 0 ? 1 : 0,
          }));
          gsap.to(imageContainerRef.current, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power1.inOut",
          });
        },
      });
    }
  }, [setActiveBackground, activeCollection]);

  useEffect(() => {
    const interval = setInterval(() => {
      fadeAnimation();
    }, 6500);

    return () => clearInterval(interval);
  }, [fadeAnimation]);

  return (
    <div className="absolute inset-0 w-full h-full z-[-1] bg-black">
      <div
        ref={imageContainerRef}
        className="relative w-full h-full grid grid-cols-1 lg:grid-cols-2"
      >
        <div className={`relative w-full h-full`}>
          {activeBackground?.collection ? (
            <Image
              key={`${activeBackground?.collection}-${activeBackground?.index}`}
              src={
                background_data[activeBackground?.collection][
                  isDesktop ? 0 : activeBackground?.index
                ].src
              }
              alt={
                background_data[activeBackground?.collection][
                  isDesktop ? 0 : activeBackground?.index
                ].alt
              }
              layout="fill"
              style={{ objectFit: "cover", objectPosition: imagePos }}
              loading="eager"
              // blurDataURL={myBlurDataUrl}
            />
          ) : (
            <></>
          )}
        </div>

        {isDesktop && (
          <div className={`relative w-full h-full`}>
            {activeBackground?.collection ? (
              <Image
                key={`${activeBackground?.collection}-${activeBackground?.index}`}
                src={background_data[activeBackground?.collection][1].src}
                alt={background_data[activeBackground?.collection][1].alt}
                layout="fill"
                style={{ objectFit: "cover", objectPosition: imagePos }}
                loading="eager"

                // blurDataURL={myBlurDataUrl1}
              />
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Background;
