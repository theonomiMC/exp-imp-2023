import {
  getTopExportCountries,
  getTopExportCountryItems,
  getTopExportedProducts,
} from "@/app/lib/actions";
import styles from "./countries.module.css";
import dynamic from "next/dynamic";
import { currency, getChartData } from "@/app/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import Loader from "../Loader";

// / components/MyChart.js contains the recharts chart
const BarChart = dynamic(() => import("../charts/Bar"), {
  ssr: false,
});
const Tree = dynamic(() => import("../charts/TreeChart"), {
  ssr: false,
});
const ExportCountries = async () => {
  let products = await getTopExportedProducts();
  products = products.map((el) => ({
    ...el,
    cost: Number(el.cost),
    share: Number(el.share),
  }));
  let countries = await getTopExportCountries();
  countries = countries.map((el) => ({
    ...el,
    cost: Number(el.cost),
    share: Number(el.share),
  }));
  let countryItems = await getTopExportCountryItems();
  let treeData = [];
  let data = countryItems.reduce((acc, curr) => {
    (acc[curr?.country] ||= []).push(curr);
    return acc;
  }, {});
  for (let [key, val] of Object.entries(data)) {
    let obj = {
      name: key,
      children: val.map((el) => ({
        name: el?.category,
        size: Number(el?.cost),
        pct: Number(el?.pct),
      })),
    };

    treeData.push(obj);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        TRADE PARTNERS BY EXPORT IN JANUARY - OCTOBER 2023
      </h1>
      <section className={styles.wrapper}>
        <div className={styles.textcontent}>
          In january - october 2023 the share of the main trading partners by
          exports were Russia (18%), Turkey (11.7%), China (11.3%), Bulgaria
          (8.9%) and Armenia (6.3%).
          <blockquote>
            <p>
              In 2022 the share of the top ten trading partners by exports in
              the total exports of Georgia amounted to 78.6 percent. The top
              partners were China (USD 736.8 million), Azerbaijan (USD 672.6
              million) and Russia (USD 651.6 million).
            </p>
            <small>(National Statistics office of Georgia)</small>
          </blockquote>
        </div>
        <div className={styles.chart}>
          <Suspense fallback={<Loader />}>
            <BarChart data={countries} />
          </Suspense>
        </div>
      </section>

      <h1 className={styles.title}>
        Main Partners top 5 Exported Product Categories
      </h1>
      <section className={styles.wrapper}>
        <div className={styles.textcontent}>
          66.5% of Wine was exported to Russia, 85% of Electrical Energy was
          exported to Turkey and 40% of Copper ores and concentrates were
          exported to Chine, in total.
          <blockquote>
            <p>
              In 2022 copper ores and concentrates reclaimed the first place in
              the list of top export items, equaling USD 1 024.3 million with
              18.3 percent of total exports. The exports of motor cars totaled
              USD 903.8 million and their share in the total exports amounted to
              16.2 percent. The exports ferroalloys occupied the third place
              standing at USD 459.8 million and constituting 8.2 percent of the
              total exports
            </p>
            <small>(National Statistics office of Georgia)</small>
          </blockquote>
        </div>
        <div className={styles.chart}>
          <Suspense fallback={<Loader />}>
            <Tree data={treeData} />
          </Suspense>
        </div>
      </section>
      <h1 className={styles.title}>
        Main Products Exported in January - October 2023
      </h1>
      <section className={styles.wrapper}>
        <ul className={styles.table}>
          <li className={styles.header}>
            <div className={styles.col}>Category</div>
            <div>Total Amount</div>
            <div>Share of Total</div>
          </li>
          <div className={styles.rows}>
            {products.map((el) => (
              <li className={styles.row} key={el.id}>
                <div className={styles.col}>{el.category}</div>
                <div className={styles.cost}>{currency(el.cost)}</div>
                <div className={styles.cost}>
                  {(el.share * 100).toFixed(2)}%
                </div>
              </li>
            ))}
          </div>
        </ul>
      </section>
    </div>
  );
};

export default ExportCountries;
