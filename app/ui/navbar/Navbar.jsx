"use client";
import Link from "next/link";
import { Major_Mono_Display } from "next/font/google";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
const mono = Major_Mono_Display({ subsets: ["latin"], weight: "400" });
const links = [
  {
    name: "Countries",
    address: "/trade-partners",
  },
  {
    name: "Resources",
    address: "/resources",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <Image src={Logo} height={150} width={200} alt="trade_georgia" />
        </Link>

        <div className={styles.navLinks}>
          {links.map((link) => (
            <Link
              href={link.address}
              key={link.name}
              className={clsx(
                styles.link,
                pathname == link.address && styles.active
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
