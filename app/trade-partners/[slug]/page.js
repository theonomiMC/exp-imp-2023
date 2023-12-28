import React from "react";
import {
  getCountry,
  getCountryTopExpProducts,
  getCountryTopImpProducts,
} from "@/app/lib/actions";
import { notFound } from "next/navigation";
import { currency, normilized } from "@/app/lib/utils";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: `DTL - ${decodeURIComponent(slug)}`,
    description: `${decodeURIComponent(slug)}'s trade information`,
  };
}
const ProductChart = dynamic(() => import("@/app/ui/charts/TradeBar"), {
  ssr: false,
});
const page = async ({ params }) => {
  let { slug } = params;
  slug = decodeURIComponent(slug);

  const data = await getCountry(slug);
  const exportedProcucts = await getCountryTopExpProducts(slug);
  const importedProducts = await getCountryTopImpProducts(slug);
  console.log(importedProducts);
  if (!data.length) {
    return notFound();
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> {slug.toUpperCase()}</h1>
      <div className={styles.info}>
        {data.map((d, idx) => (
          <p key={idx}>
            {d.type}: <b>{currency(d.total_cost)}</b>
            <small>
              <b>({normilized(d.total_share, 3)}%</b> of Total {d.type})
            </small>
          </p>
        ))}
      </div>
      <div>
        {exportedProcucts && exportedProcucts?.length > 1 && (
          <div className={styles.charts}>
            <ProductChart data={exportedProcucts} />
          </div>
        )}
        {importedProducts && importedProducts?.length > 1 && (
          <div className={styles.charts}>
            <ProductChart data={importedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
