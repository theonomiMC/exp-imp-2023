import {
  getTopImportCountries,
  getTopExportCountries,
} from "@/app/lib/actions";
import styles from "./trade.module.css";
import dynamic from "next/dynamic";
import Loader from "../Loader";

const BarChart = dynamic(() => import("../charts/Bar"), {
  loading: () => <Loader />,
  ssr: false,
});
const TradePartners = async () => {
  let exportCountries = await getTopExportCountries();
  let importCountries = await getTopImportCountries();

  return (
    <div className={styles.container}>
      <BarChart title="Export" data={exportCountries} id="export" />
      <BarChart title="Import" data={importCountries} />
    </div>
  );
};

export default TradePartners;
