import MouseBlobity from "@/components/mouseblobity-component/MouseBlobity.component";
import PageTransition from "@/components/pagetransition-component/PageTransitions.component";
import { SmoothScrolling } from "@/components/SmoothScrolling-component";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Baskervville, Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const baskervville = Baskervville({ subsets: ["latin"], weight: ["400"] });

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000900" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Viert Atelier" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* description */}
        <meta name="description" content="Viert Atelier é um atelier de moda especializado em vestidos de noiva, festa e sob medida." />

        <title>Viert Atelier</title>

        {/* keywords */}
        <meta
          name="keywords"
          content="viert, atelier, moda, vestido, noiva, casamento, festa, roupas, Festa, Noiva, Sob Medida, Vestido de Festa, Casamento, Casamento Civil, Mini Casamento, Wedding, Mini Wedding, 15 anos, Madrinha, Vestido de Noiva, Mãe da Noiva, Vestidos Sob Medida, Vestidos Personalizados, Vestidos de Alta Costura, Vestidos Exclusivos, Vestidos para Eventos Especiais, Moda Nupcial, Vestidos para Madrinhas, Vestidos para Daminhas, Vestidos de Gala, Vestidos de Formatura, Estilo Único, Design Exclusivo, Alta Costura para Noivas, Moda Festa Personalizada, Vestido de Noiva Único, Atelier de Vestidos, Vestido Feito Sob Medida, Vestido de Noiva Sob Medida, Vestidos de Festa, Personalizados, Atelier de Moda Nupcial, Vestidos de Noiva Personalizados em São Paulo, Vestidos de Festa Sob Medida no Brasil, Atelier de Moda Exclusiva para Casamentos, Vestidos para Casamento Civil Personalizados, Design de Vestidos de Noiva Único e Autoral, Vestidos de Madrinha Sob Medida em São Paulo, Vestidos de 15 anos com Design Exclusivo, Moda Personalizada para Casamentos e Festas, Vestido de Mãe da Noiva Sob Medida, Vestidos de Mini Wedding Exclusivos, Casamento Religioso, Casamento Católico, Casamento Judaico, Atelier, Vestidos de Noiva, Vestidos de Festa, Sob Medida, Sob Encomenda, Carol Hungria, Alta Costura, Moda, Gávea, Rio de Janeiro, LIFE Noiva, Martu, Martha Medeiros, Majeste, Ateliê, Aline Feltes, VESTIDOS ÚNICOS, Confecção de vestidos, Vestidos Exclusivos, Le Blanche Noivas, Desenho e confecção, madrinha, damas de honra, pajem, Glamour, Original, Sonho, noivas, madrinhas, formandas, debutantes,  convidadas, bar mitzvah, bat mitzvah, Lili Carvalho, Estilista, Designer, Maria Bonita, tecidos nobres, rendas, Plissê, Flores de tecido, pintura à mão, Fafi Vasconcellos, vestido personalizado, charme, Maria Karin, organza, seda, tule, maison deloree, nova noiva, Atendimento Exclusivo,  Diferenciado, luxo, Carlos Bacchi, eduarda galvani, julia pak, rebeca nepomuceno, bridal, lucas anderi, wanda borges, Vanessa Abbud,sandra barros, isabella narchi, Emannuelle Junqueira, decote, casamento, roupas, Vestido de festa online, ⁠Vestido de Noiva online"
        />

        {/* robots */}
        <meta name="robots" content="index, follow" />

        {/* og */}
        <meta property="og:title" content="Viert Atelier" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viertatelier.com" />
        <meta
          property="og:image"
          content="https://viertatelier.com/og.webp"
        />
        <meta property="og:site_name" content="Viert Atelier" />
        <meta property="og:locale" content="pt_BR" />

        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Viert Atelier" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://viertatelier.com/og.webp"
        />
        <meta name="twitter:site" content="@viertatelier" />
        <meta name="twitter:creator" content="@viertatelier" />

        {/* author */}
        <meta name="author" content="Majors Solutions" />
        <link rel="author" href="https://www.majorssolutions.com.br" />

        {/* application name */}
        <meta name="application-name" content="Viert Atelier" />
      </Head>
      <AppProvider>
        <PageTransition>
          <SmoothScrolling>
            <main
              className={`${montserrat.className} ${baskervville.className}`}
            >
              <Component {...pageProps} />
              <MouseBlobity />
            </main>
          </SmoothScrolling>
        </PageTransition>
      </AppProvider>
    </>
  );
}

export default App;
