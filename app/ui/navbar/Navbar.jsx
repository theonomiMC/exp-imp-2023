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
    name: "Contact",
    address: "/contact",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <div className={styles.titleBox}>
            <h1 className={styles.title}>
              <Link href="/">
                Data<span>Sis</span>
              </Link>
            </h1>
          </div>
        </div>

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
