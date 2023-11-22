import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Dashboard from "./ui/dashboard/Dashboard";

const API =
  "https://script.google.com/macros/s/AKfycbyhHwLHJaxFjsdnNj9UMiNYTURpJr2n_Mid277flcOPWOAq2T3aHJaqKAcaCzotSjGi/exec";
export async function getData() {
  const res = await fetch(API);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { data } = await getData();

  if (!data) {
    return notFound();
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Georgia Export - Import January-October 2023
      </h1>
      <Dashboard data={data} />
    </main>
  );
}
