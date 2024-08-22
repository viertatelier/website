import { CTA } from "@/components";
import TitleDescriptionBtn from "@/components/titledescriptionbtn-component/TitleDescriptionBtn.component";
import { useApp } from "@/context/AppContext";
import { collections_data } from "@/data/collections-data";
import Image from "next/image";
import React from "react";

import localFont from "next/font/local";
import styles from "./Collection.module.scss";
const canelaFont = localFont({
  src: "../../styles/fonts/canela/CanelaText-LightItalic-Trial.otf",
});

const Collection: React.FC = () => {
  const {
    device: { isDesktop },
  } = useApp();
  const navigateTo = (link: string) => {
    window.location.href = link;
  };

  const content = {
    mobile: (
      <>
        {/* ATELIER VIERT */}
        <div
          className="h-fit  flex flex-col gap-[48px] pt-[10vh] pb-[7vh]"
          id="about"
        >
          <div className="grid  grid-cols-2 gap-[16px] px-[24px]">
            <div
              className="relative"
              style={{
                aspectRatio: 0.668,
              }}
            >
              <Image
                className="object-cover bg-cover bg-center"
                src={collections_data.atelier_viert.images[0].src}
                alt={collections_data.atelier_viert.images[0].alt}
                layout="fill"
                loading="eager"
              />
            </div>
            <div
              className="relative"
              style={{
                aspectRatio: 0.668,
              }}
            >
              <Image
                className="object-cover bg-cover bg-center"
                layout="fill"
                src={collections_data.atelier_viert.images[1].src}
                alt={collections_data.atelier_viert.images[1].alt}
                loading="eager"
              />
            </div>
          </div>
          <div
            className="
            flex
            flex-col
            gap-[5vh]
            items-center
          "
          >
            <div className="flex flex-col items-center">
              <h1
                className={`${canelaFont.className} italic text-nowrap text-black text-center text-[42px]`}
              >
                {collections_data.atelier_viert.title}
              </h1>
              <p
                className="
                text-black
                text-center
                mt-[32px]
                max-w-[80%]
            "
              >
                {collections_data.atelier_viert.description}
              </p>
            </div>
            <CTA
              text={collections_data.atelier_viert.cta.text}
              href={collections_data.atelier_viert.cta.link}
              variant="secondary"
            />
          </div>
        </div>

        {/* NOIVAS VIERT */}
        <div
          className="bg-[#EFEFE9] pb-[7vh] flex flex-col gap-[5vh]"
          id="collections"
        >
          <div
            className="relative flex flex-col h-full w-full items-center justify-center"
            style={{
              aspectRatio: 1.2,
            }}
          >
            <Image
              className="object-cover bg-cover bg-center absolute"
              layout="fill"
              src={collections_data.noivas_viert.images[0].src}
              alt={collections_data.noivas_viert.images[0].alt}
            />

            <div className="w-[40%] text-center z-10">
              <h1
                className={`${canelaFont.className} text-white italic text-[32px]`}
              >
                {collections_data.noivas_viert.title}
                <br />
                {collections_data.noivas_viert.subtitle}
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center">
            <p className="text-black text-center max-w-[80%]">
              {collections_data.noivas_viert.description}
            </p>
            <CTA
              text={collections_data.noivas_viert.cta.text}
              onClick={() => navigateTo(collections_data.noivas_viert.cta.link)}
              variant="secondary"
            />
          </div>
        </div>

        {/* FESTAS VIERT */}
        <div
          className="
          grid 
          grid-cols-2
          grid-rows-2
          gap-[20px]
          mb-[5vh]
          mt-[7vh]
          md:mt-[120px]
          px-[20px]
          max-h-[800px]
          md:h-fit
        "
        >
          <div
            className="
            w-full
            flex
            flex-col
            gap-[12px]
            md:gap-[28px]
          "
          >
            <h1
              className={`${canelaFont.className} italic text-black font-extralight text-[30px] md:text-[42px]`}
            >
              {collections_data.festas_viert.title}
            </h1>
            <p className="text-[15px] leading-6 lg:leading-relaxed text-black">
              {collections_data.festas_viert.description}
            </p>

            <CTA
              text={collections_data.festas_viert.cta.text}
              variant="secondary"
              className="w-full text-[12px] text-nowrap"
              onClick={()=>navigateTo(collections_data.festas_viert.cta.link)}
            />
          </div>
          <div
            className="relative"
            style={{
              aspectRatio: 0.775,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              quality={100}
              className="object-cover bg-cover bg-center"
              layout="fill"
              src={collections_data.festas_viert.images[1].src}
              alt={collections_data.festas_viert.images[1].alt}
            />
          </div>
          <div
            className="relative"
            style={{
              aspectRatio: 0.775,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              quality={100}
              className="object-cover bg-cover bg-center "
              layout="fill"
              src={collections_data.festas_viert.images[0].src}
              alt={collections_data.festas_viert.images[0].alt}
            />
          </div>
          <div
            className="relative"
            style={{
              aspectRatio: 0.775,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              quality={100}
              layout="fill"
              className="object-cover bg-cover bg-center"
              src={collections_data.festas_viert.images[2].src}
              alt={collections_data.festas_viert.images[2].alt}
            />
          </div>
        </div>

        {/* TAYLOR CALL */}
        <div
          className="
          flex
          flex-col
          items-center
          justify-center
          container 
          mx-auto
        "
        >
          <p className={styles.taylorText + " max-w-[80%] mb-[5vh]"}>
            {collections_data.taylor.description}
          </p>
          <CTA
            href={collections_data.taylor.cta.link}
            text={collections_data.taylor.cta.text}
            variant="secondary"
          />
        </div>
      </>
    ),
    desktop: (
      <>
        {/* ATELIER VIERT */}
        <div
          className="flex items-center justify-center gap-[50px] pt-[18vh]"
          style={{
            paddingLeft: "18.2%",
            paddingRight: "18.2%",
          }}
          id="about"
        >
          <div
            className="w-full flex flex-col max-w-[50%]"
            style={{
              flexShrink: 0,
            }}
          >
            <div
              className="relative"
              style={{
                aspectRatio: 0.667,
              }}
            >
              <Image
                quality={100}
                layout="fill"
                className="object-cover"
                src={collections_data.atelier_viert.images[0].src}
                alt={collections_data.atelier_viert.images[0].alt}
                loading="eager"
              />
            </div>
            <CTA
              text={collections_data.atelier_viert.cta.text}
              className="mt-[60px]"
              variant="secondary"
              href={collections_data.atelier_viert.cta.link}
            />
          </div>
          <div
            className="w-full flex flex-col max-w-[50%]"
            style={{
              flexShrink: 0,
            }}
          >
            <div className="text-black">
              <h1 className={`${canelaFont.className} ${styles.title}`}>
                {collections_data.atelier_viert.title}
              </h1>
              <p className={styles.text}>
                {collections_data.atelier_viert.description}
              </p>
            </div>

            <div
              className="relative"
              style={{
                aspectRatio: 0.684,
              }}
            >
              <Image
                className="object-cover bg-center pt-[40px]"
                layout="fill"
                loading="eager"
                src={collections_data.atelier_viert.images[1].src}
                alt={collections_data.atelier_viert.images[1].alt}
              />
            </div>
          </div>
        </div>

        {/* NOIVAS VIERT */}
        <div
          className="flex bg-[#EFEFE9] mt-[20vh] h-[79.90vh]"
          id="collections"
        >
          <div
            style={{
              aspectRatio: 1.9,
            }}
            className="w-1/2 relative"
          >
            <Image
              quality={100}
              layout="fill"
              className="object-center bg-bottom object-cover "
              src={collections_data.noivas_viert.images[0].src}
              alt={collections_data.noivas_viert.images[0].alt}
            />
          </div>
          <div className="w-1/2 py-[7vh] md:py-[14vh] pl-[55px] text-black">
            <TitleDescriptionBtn
              title={collections_data.noivas_viert.title}
              description={collections_data.noivas_viert.description}
              navigationLink={collections_data.noivas_viert.cta.link}
              btnText={collections_data.noivas_viert.cta.text}
              descrNeedsToFit
            />
          </div>
        </div>

        {/* FESTAS VIERT */}
        <div
          className="relative text-black mt-[20vh] mb-[17.5vh]"
          style={{
            marginLeft: "18.2%",
            marginRight: "18.2%",
          }}
        >
          <div className="w-[40%]">
            <TitleDescriptionBtn
              title={collections_data.festas_viert.title}
              description={collections_data.festas_viert.description}
              navigationLink={collections_data.festas_viert.cta.link}
              btnText={collections_data.festas_viert.cta.text}
              descrNeedsToFit={false}
            />
          </div>

          <div className="absolute top-[0] lg:right-0">
            <div
              className="relative w-[35.90vw]"
              style={{
                aspectRatio: 0.798,
              }}
            >
              <Image
                layout="fill"
                className="object-cover"
                src={collections_data.festas_viert.images[2].src}
                alt={collections_data.festas_viert.images[2].alt}
                style={{
                  aspectRatio: 0.798,
                }}
              />
            </div>
          </div>
          <div className="flex relative gap-[37px] mt-[10.5vh] ">
            <div
              className="p-2 relative w-[30%]"
              style={{
                aspectRatio: 0.798,
              }}
            >
              <Image
                layout="fill"
                className="object-cover"
                src={collections_data.festas_viert.images[0].src}
                alt={collections_data.festas_viert.images[0].alt}
              />
            </div>
            <div
              className="p-2 relative w-[30%]"
              style={{
                aspectRatio: 0.798,
              }}
            >
              <Image
                layout="fill"
                className="object-cover"
                src={collections_data.festas_viert.images[1].src}
                alt={collections_data.festas_viert.images[1].alt}
              />
            </div>
          </div>
        </div>

        {/* TAYLOR CALL */}
        <div className="text-black my-[7vh] md:my-[120px] container mx-auto flex flex-col gap-[82px] items-center justify-center">
          <p className={styles.taylorText}>
            {collections_data.taylor.description}
          </p>
          <CTA
            variant="secondary"
            className=""
            text={collections_data.taylor.cta.text}
            href={collections_data.taylor.cta.link}
          />
        </div>
      </>
    ),
  };

  return (
    <section className="bg-white">
      {isDesktop ? content.desktop : content.mobile}
    </section>
  );
};

export default Collection;
