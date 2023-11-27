import styles from "@/app/ui/home.module.css";
import Dashboard from "@/app/ui/dashboard/Dashboard";
import MonthReport from "./ui/month-report/MonthReport";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>
        EXTERNAL MERCHANDISE TRADE OF GEORGIA
      </h1>
      <h2 className={styles.subtitle}>IN JANUARY-OCTOBER 2023</h2>
      <Dashboard />
      <MonthReport />
    </main>
  );
}
