"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./sidebar.module.css";

const Search = () => {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(term);
    if (term.trim().toLowerCase()) {
      router.replace(`/trade-partners/${term.trim().toLowerCase()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <label htmlFor="searchterm"></label>
      <input
        id="searchterm"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default Search;
