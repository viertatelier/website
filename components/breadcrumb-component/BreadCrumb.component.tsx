import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./BreadCrumb.module.scss"; // Importando os estilos Sass

const BreadCrumb: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  const pathArray = pathname.split("/").filter((path) => path);

  const isCollectionPage =
    pathArray.length >= 2 && pathArray[0] === "collection";
  const collectionName = isCollectionPage
    ? pathArray[1].replace(/-/g, " ")
    : "";

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumb}>
      <ol>
        <li>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        {isCollectionPage && (
          <>
            <span className={styles.separator}> / </span>
            <Link href={`/collection/${pathArray[1]}`}>
              <li className={styles.collectionName}>
                {collectionName.charAt(0).toUpperCase() +
                  collectionName.slice(1)}
              </li>
            </Link>
          </>
        )}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
