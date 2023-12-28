import Link from "next/link";
import styles from "./dashboard.module.css";
import clsx from "clsx";

const Card = ({ text, number, children, color }) => {
  const cardClass = clsx(styles.card, {
    [styles.card]: true,
    [styles.bgRed]: color === "bgRed",
    [styles.bgBlue]: color === "bgBlue",
    [styles.bgYellow]: color === "bgYellow",
    [styles.bgGreen]: color === "bgGreen",
  });
  return (
    <div className={cardClass}>
      <div className={styles.container_card}>
        <h3 className={styles.cardTitle}>{text}</h3>
        <p className={styles.cardDesc}>{number}</p>
      </div>
      <div className={styles.svgBox}>{children}</div>
    </div>
  );
};

export default Card;
