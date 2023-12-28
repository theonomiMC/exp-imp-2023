import React from "react";
import { getGrowthRate, getKpis } from "../../lib/actions";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import styles from "./dashboard.module.css";
import { numFormater } from "@/app/lib/utils";
import { PctIcon } from "@/app/lib/PctIcon";
import Card from "./Card";

const Dashboard = async () => {
  const { totalExport, totalImport, tradeBalance } = await getKpis();
  const { export_growth_rate, import_growth_rate } = await getGrowthRate();
  const links = [
    {
      text: "Total Import",
      number: numFormater(totalImport, true),
      color: "bgRed",
      icon: <ArrowTrendingUpIcon className={styles.svg} strokeWidth={1} />,
    },
    {
      text: "Total Export",
      number: numFormater(totalExport, true),
      color: "bgBlue",
      icon: <ArrowTrendingDownIcon className={styles.svg} strokeWidth={1} />,
    },
    {
      text: "Trade Balance",
      number: numFormater(tradeBalance, true),
      color: "bgYellow",
      icon: <ScaleIcon className={styles.svg} strokeWidth={1} />,
    },
    {
      text: "Import % Growth",
      number: import_growth_rate,
      color: "bgGreen",
      icon: <PctIcon />,
    },
    {
      text: "Import % Growth",
      number: export_growth_rate,
      color: "bgGreen",
      icon: <PctIcon />,
    },
  ];
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <Card
          text={link.text}
          number={link.number}
          color={link.color}
          key={link.text}
        >
          {link.icon}
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
