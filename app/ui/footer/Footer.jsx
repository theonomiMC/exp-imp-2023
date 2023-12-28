import styles from "./footer.module.css";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Contact",
    url: "/contact/#info",
  },
  {
    id: 2,
    name: "Materials",
    url: "/contact/#materials",
  },
  {
    id: 3,
    name: "Kaggle",
    url: "/contact/#kaggle-code",
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
      <ul className={styles.list}>
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            <li className={styles.item}>{link.name}</li>
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
