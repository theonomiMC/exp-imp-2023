import React from "react";
import Resources from "../ui/resources/Resources";
import styles from "./page.module.css";

export const metadata = {
  title: "DTL - Resources",
  description: "Website Resources information.",
};
const page = () => {
  return (
    <div className={styles.container}>
      <Resources />
    </div>
  );
};

export default page;
