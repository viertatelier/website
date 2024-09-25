import { CTA } from "@/components/cta-component";
import { Product } from "@/interfaces/contetfulData";
import React from "react";
import { Baskervville, Inter } from "next/font/google";
import styles from "./infos.module.scss";
import { currencyFormat } from "@/utils/functions";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const baskerville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
});

type InfosProps = {
  infos: Product;
};

const Infos: React.FC<InfosProps> = ({
  infos: { colors, description, name, price, sizes },
}) => {
  const [colorSelected, setColorSelected] = React.useState<string | null>(null);
  const [sizeSelected, setSizeSelected] = React.useState<number | null>(null);

  function formatTableString(description: string) {
    const lines = description.trim().split("\n");
    const tableStartIndex = lines.findIndex(
      (line) =>
        line.includes("Tamanho") &&
        line.includes("Busto") &&
        line.includes("Cintura") &&
        line.includes("Quadril")
    );

    if (tableStartIndex === -1) {
      return description.replace(/\n/g, "<br>");
    }

    const tableLines = lines.slice(tableStartIndex);
    const formattedLines = tableLines.map((line) => {
      const cells = line
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell);
      return `<tr>${cells.map((cell) => `<td>${cell}</td>`).join("")}</tr>`;
    });

    const beforeTable = lines.slice(0, tableStartIndex).join("<br>");
    const formattedTable = `<table><tbody>${formattedLines.join(
      ""
    )}</tbody></table>`;

    return `${beforeTable}<div style="margin-top: 1em; margin-bottom: 1em;">${formattedTable}</div>`;
  }

  // Verifica se a descrição contém a tabela e a formata
  const formattedDescription = formatTableString(description);

  function handleSendToWpp() {
    let message = `Olá! Gostaria de saber mais sobre o produto ${name}`;

    if (colorSelected && sizeSelected) {
      message += ` na cor ${colorSelected} e tamanho ${sizeSelected}`;
    } else if (colorSelected) {
      message += ` na cor ${colorSelected}`;
    } else if (sizeSelected) {
      message += ` no tamanho ${sizeSelected}`;
    }

    const url = `https://api.whatsapp.com/send?phone=5521974575663&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  return (
    <div
      className="lg:pt-[19.54vh] lg:pl-[5.99vw] px-[9.01vw] pt-[5vh] lg:px-[unset] lg:pt-[unset]
    "
    >
      <div className="mb-[4vh]">
        <h3 className={`${inter.className} ${styles.name}`}>{name}</h3>
        <p className={`${inter.className} ${styles.price}`}>{currencyFormat(price)}</p>

        <p className={`text-[14px] ${inter.className} ${styles.colors}`}>
          {colors.map((color) => {
            const colorLower = color.toLowerCase();

            if (colorLower === "cores sob consulta")
              return (
                <span key={color} className="capitalize">
                  {color}
                </span>
              );

            // traduzir para inglês a cor

            return (
              <button
                key={color}
                onClick={() => {
                  if (colorSelected === color) {
                    setColorSelected(null);
                    return;
                  } else if (colorSelected === null) {
                    setColorSelected(color);
                    return;
                  }
                }}
                style={{
                  backgroundColor: colorSelected === color ? "black" : "",
                  color: colorSelected === color ? "white" : "",
                }}
              >
                <span className={baskerville.className}>{color}</span>
              </button>
            );
          })}
        </p>

        <div className={styles.sizes}>
          {!sizes ? (
            <p className={`${inter.className} ${styles.size}`}>Tamanho único</p>
          ) : (
            sizes.map((size, index) => {
              return (
                <button
                  key={index}
                  className={`${size === sizeSelected ? styles.selected : ""} ${
                    styles.size
                  }`}
                  onClick={() => {
                    if (sizeSelected === size) {
                      setSizeSelected(null);
                      return;
                    }

                    setSizeSelected(size);
                  }}
                >
                  <span className="capitalize">{size}</span>
                </button>
              );
            })
          )}
        </div>
      </div>

      <div>
        <CTA
          variant="secondary"
          text="ENTRE EM CONTATO"
          onClick={handleSendToWpp}
        />
        <div
          className={`${inter.className} ${styles.description}`}
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        />
      </div>
    </div>
  );
};

export default Infos;
