import { Inter } from "next/font/google";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/footer/Footer";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DTL",
  description:
    "Explore the dynamic trade landscape of Georgia. Discover key insights and trends shaping the country's trade activities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
