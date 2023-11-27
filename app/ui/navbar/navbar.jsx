"use client";
import Link from "next/link";
import { clsx } from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const links = [
  {
    name: "Import",
    address: "/import",
  },
  {
    name: "Export",
    address: "/export",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.container}>
      <div>
        <Image src="./logo.svg" width={70} height={70} alt="DTL logo" />
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <Link href="/">Data Analysis</Link>
        </h2>

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
    </nav>
  );
};

export default Navbar;
