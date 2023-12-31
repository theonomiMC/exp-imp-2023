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
    if (sortBy === "export") {
      return b.export_share - a.export_share;
    }
    if (sortBy === "import") {
      return b.import_share - a.import_share;
    }
    if (sortBy === "asc") {
      return a.country.localeCompare(b.country);
    } else if (sortBy === "desc") {
      return b.country.localeCompare(a.country);
    }
    return 0;
  });

  return (
    <div className={styles.table}>
      {sortedData.map((d) => (
        <div key={d.country} className={styles.content}>
          <p>
            <Link href={`/trade-partners/${d.country}`} prefetch={false}>
              {d.country}
            </Link>
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
