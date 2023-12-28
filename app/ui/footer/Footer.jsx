import styles from "./footer.module.css";

const links = [
  {
    id: 1,
    name: "Contact",
  },
  {
    id: 2,
    name: "Materials",
  },
  {
    id: 3,
    name: "Code",
  },
];
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li className={styles.item} key={link.id}>
            {link.name}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
