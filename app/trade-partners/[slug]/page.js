import React from "react";
import {
  getCountry,
  getCountryTopExpProducts,
  getCountryTopImpProducts,
} from "@/app/lib/actions";
import { notFound } from "next/navigation";
import { currency, normilized } from "@/app/lib/utils";
import styles from "./page.module.css";
import CountryItem from "@/app/ui/country-item/CountryItem";

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: `DTL - ${decodeURIComponent(slug)}`,
    description: `${decodeURIComponent(slug)}'s trade information`,
  };
}
const page = async ({ params }) => {
  let { slug } = params;
  slug = decodeURIComponent(slug);

  const data = await getCountry(slug);
  const exportedProcucts = await getCountryTopExpProducts(slug);
  const importedProducts = await getCountryTopImpProducts(slug);
  if (!data.length) {
    return notFound();
  }
  return (
    <div className="pageContainer centered">
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
        {exportedProcucts && exportedProcucts?.length > 0 && (
          <CountryItem data={exportedProcucts} />
        )}
        {importedProducts && importedProducts?.length > 0 && (
          <CountryItem data={importedProducts} />
        )}
        <p className={styles.note}>
          (You can find code definition on{" "}
          <a href="https://www.rs.ge/CommodityCodes-en" target="_blank">
            rs.ge
          </a>
          )
        </p>
      </div>
    </div>
  );
};

export default page;
