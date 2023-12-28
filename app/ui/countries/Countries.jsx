"use client";
import React from "react";
import Link from "next/link";
import styles from "./countries.module.css";
import { useSearchParams } from "next/navigation";

const Countries = ({ data }) => {
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort");
  // Sort the data array based on the 'sort' value
  const sortedData = [...data].sort((a, b) => {
    // Assuming 'sort' can be 'asc' or 'desc'
    if (sortBy === "export") {
      // Sort based on export_share
      return b.export_share - a.export_share;
    }
    if (sortBy === "import") {
      // Sort based on import_share
      return b.import_share - a.import_share;
    }
    if (sortBy === "asc") {
      return a.country.localeCompare(b.country);
    } else if (sortBy === "desc") {
      // Sort in descending order
      return b.country.localeCompare(a.country);
    }
    return 0;
  });

  return (
    <div className={styles.table}>
      {sortedData.map((d) => (
        <div
          key={d.country}
          className={styles.content}
          style={{
            backgroundColor: getColorBasedOnImportShare(d.import_share),
          }}
        >
          <p>
            <Link href={`/trade-partners/${d.country}`}>{d.country}</Link>
          </p>
          <small>
            Import ({d?.import_cost} / {d?.import_share}% )
          </small>
          <small>
            Export ({d?.export_cost} / {d?.export_share}% )
          </small>
        </div>
      ))}
    </div>
  );
};

export default Countries;

// Helper function to determine background color based on import_share
const getColorBasedOnImportShare = (importShare) => {
  return `hsl(250, 40%, ${importShare})`;
};
