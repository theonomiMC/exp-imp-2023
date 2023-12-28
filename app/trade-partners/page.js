import React from "react";
import styles from "./page.module.css";
import { getCountries } from "../lib/actions";
import Sort from "../ui/Sort";
import Countries from "../ui/countries/Countries";
export const metadata = {
  title: "DTL - Partners",
  description: "Georgia's Tradecoun Partners",
};

const page = async () => {
  const data = await getCountries();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Countries</h1>
      <Sort />
      <Countries data={data} />
    </div>
  );
};

export default page;
