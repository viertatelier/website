import React from "react";
import localFont from "next/font/local";
import CTA from "../cta-component/CTA.component";
import styles from "./TitleDescriptionBtn.module.scss";
type TitleDescriptionBtnProps = {
  title: string | React.ReactNode;
  description: string;
  navigationLink: string;
  btnText: string;
  descrNeedsToFit: boolean;
};

const canelaFont = localFont({
  src: "../../styles/fonts/canela/CanelaText-LightItalic-Trial.otf",
});

const TitleDescriptionBtn: React.FC<TitleDescriptionBtnProps> = ({
  title,
  description,
  navigationLink,
  btnText,
  descrNeedsToFit,
}) => {
  const navigateTo = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="flex flex-col justify-between h-full gap-[7vh]">
      <div>
        <span
          className={`${styles.title}  ${canelaFont.className}
        
`}
        >
          {title}
        </span>
        <p
          className={`mt-[3.70%] ${styles.text} ${
            descrNeedsToFit && "max-w-[80%]"
          }`}
        >
          {description}
        </p>
      </div>

      <CTA
        variant="secondary"
        text={btnText}
        onClick={() => {
          navigateTo(navigationLink);
        }}
      />
    </div>
  );
};

export default TitleDescriptionBtn;
