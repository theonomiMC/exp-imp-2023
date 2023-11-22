// import { ArrowRightIcon } from "@heroicons/react/24/outline";

import styles from "./page.module.css";
import Dashboard from "./ui/dashboard/Dashboard";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Georgia Export - Import January-October 2023
      </h1>
      {/* <Dashboard data={data} /> */}
    </main>
  );
}
