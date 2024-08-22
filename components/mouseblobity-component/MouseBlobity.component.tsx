"use client";

import { useEffect } from "react";
import useBlobity from "blobity/lib/react/useBlobity";
import AOS from "aos";
export const blobityConfig = {
  licenseKey: "opensource",
  focusableElementsOffsetX: 15,
  focusableElementsOffsetY: 15,
  dotColor: "#fff",
  color: "#000",
  fontColor: "#fff",
  fontWeight: 500,
  font: "'Montserrat', Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  focusableElements:
    "[data-blobity], li:not([data-no-blobity]), a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
  opacity: 0.4,
  border: "1px solid #0e1016",
  zIndex: 100,
  size: 20,
  invert: false,
  magnetic: false,
};

export default function MouseBlobity() {
  const blobityInstance = useBlobity(blobityConfig);
  //const { matches } = useMediaQuery("(max-width: 880px)");

  useEffect(() => {
    AOS.init();
    if (blobityInstance.current) {
      // eslint-disable-next-line
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return <div />;
}
