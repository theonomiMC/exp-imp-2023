import Link from "next/link";
import styles from "./dashboard.module.css";

const Card = ({ text, number, href, children }) => {
  return (
    <Link href={href}>
      <div className={styles.card}>
        <div className={styles.svgBox}>{children}</div>
        <div className={styles.content}>
          <h3 className={styles.text}>{text}</h3>
          <p className={styles.number}>{number}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
