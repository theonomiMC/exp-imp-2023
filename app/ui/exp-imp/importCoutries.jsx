import {
  getTopImportCountries,
  getTopImportCountryItems,
  getTopImportedProducts,
} from "@/app/lib/actions";
import styles from "./countries.module.css";
import dynamic from "next/dynamic";
import { numFormater, currency, getChartData } from "@/app/lib/utils";
import { Suspense } from "react";
import Loader from "../Loader";

// components/MyChart.js contains the recharts chart
const BarChart = dynamic(() => import("../charts/Bar"), {
  ssr: false,
});
const Tree = dynamic(() => import("../charts/TreeChart"), {
  ssr: false,
});

const ImportCoutries = async () => {
  let products = await getTopImportedProducts();
  products = products.map((el) => ({
    ...el,
    cost: Number(el.cost),
    share: Number(el.share),
  }));
  let countries = await getTopImportCountries();
  countries.map((el) => ({
    ...el,
    cost: numFormater(el.cost, true),
    share: Number(el.share),
  }));
  let countryItems = await getTopImportCountryItems();

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
        TRADE PARTNERS BY IMPORT IN JANUARY - OCTOBER 2023
      </h1>
      <section className={styles.wrapper}>
        <div className={styles.textcontent}>
          In january - october, 2023 the share of the main trading partners by
          import were Turkey (20.2%),Russia (16.7%), China (11.2%), Azerbaijan
          (5.5%) and Germany (4.33%).
          <blockquote>
            <p>
              In 2022 the share of the top ten trading partners by imports in
              the total imports of Georgia amounted to 67.5 percent. The top
              partners were Türkiye (USD 2 370.9 million), Russia (USD 1 835.4
              million) and China (USD 1 126.0 million).
            </p>
            <small>(National Statistics office of Georgia)</small>
          </blockquote>
        </div>
        <div className={styles.chart}>
          <Suspense fallback={<Loader />}>
            <BarChart
              data={countries}
              domain={[0, 2000000000]}
              type={"import"}
            />
          </Suspense>
        </div>
      </section>
      <h1 className={styles.title}>
        Main Partners top 5 Imported Product Categories
      </h1>
      <section className={styles.wrapper}>
        <div className={styles.textcontent}>
          55.31% of Petrolium oil was imported from Russia, 61.84% of Petrolium
          Guses was imported from Azerbaidjan and 38.08% from Russia.
          {/* <blockquote>
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
          </blockquote> */}
        </div>
        <div className={styles.chart}>
          <Suspense fallback={<Loader />}>
            <Tree data={treeData} />
          </Suspense>
        </div>
      </section>
      <h1 className={styles.title}>
        Main Products Imported in January - October 2023
      </h1>
      <div className={styles.textBox}>
        <p>
          The top import commodities in 2022 were motor cars whose imports
          equaled USD 1 618.8 million (12.0 percent of the total imports). The
          petroleum and petroleum oils followed in the list with USD 1 336.4
          million (9.9 percent of imports). The copper ores and concentrates
          were third in the top import commodity list with USD 775.3 million
          (5.8 percent of imports).
        </p>
      </div>
      <h1 className={styles.title}>
        MAIN PRODUCTS IMPORTED IN JANUARY -OCTOBER 2023
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

export default ImportCoutries;
