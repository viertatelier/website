import Image from "next/image";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css"; // CSS do Swiper

import styles from "./pictures.module.scss";

interface PicturesProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
};

const Pictures: React.FC<PicturesProps> = ({ images, ...props }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const mainSwiperRef = useRef<any>(null);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className={styles.container} {...props}>
      <div className={styles.principal}>
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          navigation
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Navigation, Thumbs]}
          className={styles.principalSwiper}
          spaceBetween={10}
          slidesPerView={1}
          ref={mainSwiperRef}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image}
                  alt={`Imagem do Produto (${index + 1})`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.thumbnails}>
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          watchSlidesProgress
          className={styles.thumbnailsSwiper}
          slideToClickedSlide
          onSwiper={setThumbsSwiper}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className={`${styles.thumbnail} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail (${index + 1})`}
                fill
                style={{ objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Pictures;
