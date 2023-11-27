import React from "react";
// import styles from "./page.module.css";
import ExportCountries from "../../ui/exp-imp/exportCoutries";
export const metadata = {
  title: "DTL -Import",
  description: "Georgia's Export 2023",
};
const page = () => {
  return (
    <div>
      <ExportCountries />
    </div>
  );
};

export default page;
