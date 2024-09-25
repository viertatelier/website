import { NavigationMobile } from "@/components/navigation-component";
import { Footer, Hero } from "@/sections";
import { InstaItem } from "@/sections/footer-section/Footer.section";
import React, { ReactNode, Suspense } from "react";
import Loading from '@/sections/loading';

type LayoutProps = {
  children: ReactNode;
  insta: InstaItem[];
  remove?: "top-off" | "bottom-off";
};

const Layout: React.FC<LayoutProps> = ({
  children,
  insta,
  remove = undefined,
}) => {
  return (
    <Suspense fallback={<Loading />}>
      <NavigationMobile />
      <div>
        {remove === "top-off" ? null : <Hero />}
        {children}
        {remove === "bottom-off" ? null : <Footer insta={insta} />}
      </div>
    </Suspense>
  );
};

export default Layout;
