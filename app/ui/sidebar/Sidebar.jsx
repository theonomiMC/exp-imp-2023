import React from "react";
import styles from "./sidebar.module.css";
import Search from "./Search";

const links = [
  {
    id: "#kpi",
    title: "KPI's",
  },
  {
    id: "#trade-partners",
    title: "Trade Partners",
  },

  {
    id: "#month-report",
    title: "Monthly Reports",
  },
  {
    id: "#top-products",
    title: "Top Trade Products",
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Search />
        </li>
        {links.map((link) => (
          <li className={styles.listItem} key={link.id}>
            <a href={link.id}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
