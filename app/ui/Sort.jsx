"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./home.module.css";

const Sort = () => {
  const [sorted, _] = useState("import");
  const { push } = useRouter();

  const handleSort = (e) => {
    const params = new URLSearchParams(e.target.value);
    params.set("sort", e.target.value);
    push(`/trade-partners?sort=${e.target.value}`);
  };
  return (
    <div className={styles.sort}>
      <label htmlFor="sort">
        Sort By:
        <select onChange={handleSort} defaultValue={sorted} id="sort">
          <option value="import">Import (Descending)</option>
          <option value="export">Export (Descending)</option>
          <option value="desc">Country by (Z-A)</option>
          <option value="asc">Country by (A-Z)</option>
        </select>
      </label>
    </div>
  );
};

export default Sort;
