"use client";
import React from "react";
import { getTotal } from "../../lib/utils";
import styles from "./page.module.css";

const Dashboard = ({ data }) => {
  const totalImports = getTotal(data);
  const totalExports = getTotal(data);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Total Export</h2>
        <p>{totalExports("export")}</p>
      </div>
      <div className={styles.card}>
        <h2>Total Import</h2>
        <p>{totalImports("import")}</p>
      </div>
    </div>
  );
};

export default Dashboard;
