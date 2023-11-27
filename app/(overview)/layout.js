import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Navbar from "../ui/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DTL",
  description: "Georgia's Export - Import 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
