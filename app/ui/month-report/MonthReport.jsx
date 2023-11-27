import React from "react";
import { getMonthlyReports } from "../../lib/actions";
import styles from "./report.module.css";
import dynamic from "next/dynamic";

// components/MyChart.js contains the recharts chart
const LineChart = dynamic(() => import("../charts/Line"), {
  ssr: false,
});
const MonthReport = async () => {
  const data = await getMonthlyReports();

  return (
    <div className={styles.container}>
      <LineChart data={data} />
    </div>
  );
};

export default MonthReport;
