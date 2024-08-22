import { useApp } from "@/context/AppContext";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { background_data } from "@/data/background-data";
import { getNextCollection } from "@/utils/getNextCollection";
import gsap from "gsap";
import Image from "next/image";
import getBase64 from "@/utils/getLocalBase64";

type BackgroundProps = {
  imagePos: "center" | "top";
};

const Background: React.FC<BackgroundProps> = ({
  imagePos = "center",
}) => {
  const {
    device: { isDesktop },
    activeBackground: { collection, index: itemIndex },
    setActiveBackground,
  } = useApp();

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [nextIndex, setNextIndex] = useState(1); // Track the next index for desktop view

  const fadeAnimation = useCallback(() => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
          setActiveBackground((prev) => ({
            collection: getNextCollection(prev.collection),
            index: prev.index === 0 ? 1 : 0,
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
  }, [setActiveBackground]);

  useEffect(() => {
    const interval = setInterval(() => {
      fadeAnimation();
    }, 6500);

    return () => clearInterval(interval);
  }, [fadeAnimation]);

  useEffect(() => {
    if (isDesktop) {
      setNextIndex((itemIndex + 1) % background_data[collection].length);
    }
  }, [collection, itemIndex, isDesktop]);

  // const myBlurDataUrl = await getBase64(
  //   background_data[collection][isDesktop ? 0 : itemIndex].src
  // );
  // const myBlurDataUrl1 = await getBase64(background_data[collection][1].src);

  return (
    <div className="absolute inset-0 w-full h-full z-[-1] bg-black">
      <div
        ref={imageContainerRef}
        className="relative w-full h-full grid grid-cols-1 lg:grid-cols-2"
      >
        <div className={`relative w-full h-full`}>
          <Image
            key={`${collection}-${itemIndex}`}
            src={background_data[collection][isDesktop ? 0 : itemIndex].src}
            alt={background_data[collection][isDesktop ? 0 : itemIndex].alt}
            layout="fill"
            style={{ objectFit: "cover", objectPosition: imagePos }}
            loading="eager"
            // blurDataURL={myBlurDataUrl}
          />
        </div>

        {isDesktop && (
          <div className={`relative w-full h-full`}>
            <Image
              key={`${collection}-${
                (itemIndex + 1) % background_data[collection].length
              }`}
              src={background_data[collection][1].src}
              alt={background_data[collection][1].alt}
              layout="fill"
              style={{ objectFit: "cover", objectPosition: imagePos }}
              loading="eager"
              // blurDataURL={myBlurDataUrl1}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Background;
