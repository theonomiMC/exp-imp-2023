import React from "react";
import { get2022MonthInfo, get2023MonthInfo } from "../../lib/actions";
import styles from "./report.module.css";
import dynamic from "next/dynamic";
import Loader from "../Loader";

const LineChart = dynamic(() => import("../charts/Line"), {
  ssr: false,
});
const Radar = dynamic(() => import("../charts/MonthRadar"), {
  loading: () => <Loader />,
  ssr: false,
});
const MonthReport = async () => {
  const month_22 = await get2022MonthInfo();
  const month_23 = await get2023MonthInfo();
  return (
    <div className={styles.container}>
      <LineChart data={month_23} />
      <div className={styles.radars}>
        <Radar data1={month_22} data2={month_23} title="Export" />
        <Radar data1={month_22} data2={month_23} title="Import" />
      </div>
    </div>
  );
};

export default MonthReport;
