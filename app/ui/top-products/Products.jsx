import React from "react";
import { getExportedProducts, getImportedProducts } from "../../lib/actions";
import styles from "./products.module.css";
import dynamic from "next/dynamic";
import Loader from "../Loader";

const Tree = dynamic(() => import("../charts/ProductTree"), {
  loading: () => <Loader />,
  ssr: false,
});
const Products = async () => {
  let exportedProducts = await getExportedProducts();
  let importedProducts = await getImportedProducts();
  return (
    <div className={styles.container}>
      <Tree data={exportedProducts} title="Exported" />
      <Tree data={importedProducts} title="Imported" />
    </div>
  );
};

export default Products;
