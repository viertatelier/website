import getBase64 from "@/utils/getLocalBase64";
import Image from "next/image";

const BGImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  // const myBlurDataUrl = await getBase64(src);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        style={{ objectFit: "cover" }}
        loading="eager"
        // blurDataURL={myBlurDataUrl}
      />
    </div>
  );
};

export default BGImage;
