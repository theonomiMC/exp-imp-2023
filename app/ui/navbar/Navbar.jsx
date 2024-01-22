"use client";
import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

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
        <div className={styles.logo}>
          <h2 className={styles.title}>
            <Link href="/">
              Data<span>Sis</span>
            </Link>
          </h2>
        </div>
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
