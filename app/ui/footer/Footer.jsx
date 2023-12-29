import styles from "./footer.module.css";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Contact",
    url: "/resources/#info",
  },
  {
    id: 2,
    name: "Materials",
    url: "/resources/#materials",
  },
  {
    id: 3,
    name: "Kaggle",
    url: "/resources/#kaggle-code",
  },
  {
    id: 4,
    name: "Countries",
    url: "/trade-partners",
  },
  {
    id: 5,
    name: "Dashboard",
    url: "/",
  },
];
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.list}>
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.item}>
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
