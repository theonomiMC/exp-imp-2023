import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import styles from "@/app/ui/home.module.css";
import clsx from "clsx";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});
const Dashboard = dynamic(() => import("../ui/dashboard/Dashboard"));
const TradePartners = dynamic(
  () => import("../ui/trade-partners/TradePartners")
);
const MonthReport = dynamic(() => import("../ui/month-report/MonthReport"));
const Products = dynamic(() => import("../ui/top-products/Products"));

export default function Home() {
  return (
    <div className={clsx(styles.container, poppins.className)}>
      <h1 className={styles.mainTitle}>
        EXTERNAL MERCHANDISE TRADE OF GEORGIA
      </h1>
      <h2 className={styles.subtitle} id="kpi">
        (January - November 2023)
      </h2>
      <section className={styles.wrapper}>
        <Dashboard />
        <div className={styles.textcontent}>
          <p>
            In 2022, the total import amounted to $10,102,970,640.73, while the
            total export reached $3,887,488,761. You can find more detailed
            trade information for the year 2022{" "}
            <a
              href="https://www.kaggle.com/code/nataliabk/g-trade-2022"
              className={styles.extLink}
            >
              here.
            </a>
          </p>
        </div>
      </section>

      <h2 className={styles.subtitle} id="trade-partners">
        Trade Partners
      </h2>
      <section className={styles.wrapper}>
        <TradePartners />
        <div className={styles.textcontent}>
          <p>
            In 2022, leading import countries included Turkiye with $2.060
            billion, russia with $1.779 billion, and China with $1.062 billion.
            Conversely, top export countries comprised China with $703 million,
            russia with $551 million, and Bulgaria with $423 million. For a more
            comprehensive overview of trade details in the year 2022, please
            refer to additional information{" "}
            <a
              href="https://www.kaggle.com/code/nataliabk/g-trade-2022"
              className={styles.extLink}
            >
              here.
            </a>
          </p>
        </div>
      </section>
      <h2 className={styles.subtitle} id="month-report">
        Monthly Reports
      </h2>
      <section className={styles.wrapper}>
        <MonthReport />
        <div className={styles.textcontent}>
          <p>
            In February 2022, both exports and imports went up, growing by
            37.09% and 21.47%, respectively. However, in June, export growth
            took a big dip, showing a decrease of -25.89%. Export growth bounced
            back in July and saw a significant increase in September. Fond more{" "}
            <a
              href="https://www.kaggle.com/code/nataliabk/g-trade-2022"
              className={styles.extLink}
            >
              here.
            </a>
          </p>
        </div>
      </section>
      <h2 className={styles.subtitle} id="top-products">
        Top Trade Products
      </h2>
      <section className={styles.wrapper}>
        <Products />
        <div className={styles.textcontent}>
          <p>
            In 2022, the most imported product categories included Petroleum
            oils ($1,299,100,437.44), Petroleum gases and other gaseous
            hydrocarbons ($403,262,607.67), and Medicaments ($345,664,014.86).
            Meanwhile, the top exported product categories comprised Copper ores
            and concentrates ($978,999,019.44), Ferro-alloys ($453,268,931.72),
            Mineral or chemical fertilisers, nitrogenous ($281,420,333.84), and
            wine ($251,859,494.35). For further details, you can find more
            information{" "}
            <a
              href="https://www.kaggle.com/code/nataliabk/g-trade-2022"
              className={styles.extLink}
            >
              here.
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
