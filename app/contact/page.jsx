import React from "react";
import Contact from "../ui/contact/Contact";
import styles from "./page.module.css";

export const metadata = {
  title: "DTL - Contact",
  description: "Developer's contact information.",
};
const page = () => {
  return (
    <div className={styles.container}>
      <Contact />
    </div>
  );
};

export default page;
