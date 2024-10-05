import { CTA } from '@/components';
import { useApp } from '@/context/AppContext';
import React from 'react';
import styles from './Content.module.scss';
import MouseScrollIndicator from '@/components/mouse-scroll-component';

type ContentProps = {
  title: string;
};

const Content: React.FC<ContentProps> = ({
  title = 'Atelier Sob Medida',
}) => {
  const {
    device: { isDesktop },
  } = useApp();

  return (
    <div className="flex flex-col items-center gap-y-[60px] w-full h-full justify-center relative">
      <div className="flex flex-col items-center gap-y-[15vh] lg:gap-y-[60px]">
        <div className="flex flex-col gap-y-[12px] lg:gap-y-[0] ">
          <h1 className={styles.title}>{title}</h1>

          {title === 'Atelier Sob Medida' && (
            <p className={styles.text}>
              Uma experiência única e personalizada
              {!isDesktop ? <br /> : ' '}
              criada exclusivamente para você.
            </p>
          )}
        </div>

        {title === 'Atelier Sob Medida' && (
          <CTA
            text={<>Conheça nossos<br/>vestidos</>}
            mxAuto
            href={'/collection/festas-viert'}
          />
        )}
      </div>

      <div
        className="absolute bottom-[12vh] w-fit flex items-center justify-center p-5"
        style={{
          // vamos fazer um background color com opacidade, bordar curvadas com efeito de glassmorphismo
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '999px',
          padding: '15px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <MouseScrollIndicator />
      </div>
    </div>
  );
};

export default Content;
