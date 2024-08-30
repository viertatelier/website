import { NavigationMobile } from "@/components/navigation-component";
import { Footer, Hero } from "@/sections";
import { InstaItem } from "@/sections/footer-section/Footer.section";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  insta: InstaItem[];
};

const Layout: React.FC<LayoutProps> = ({ children, insta }) => {
  return (
    <>
      <NavigationMobile />
      <div>
      <Hero />
      {children}
      <Footer insta={insta} />
    </div>
    </>
  );
};

export default Layout;
