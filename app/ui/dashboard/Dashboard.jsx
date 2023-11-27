import React from "react";
import { getTotalExport, getTotalImport } from "../../lib/actions";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import styles from "./dashboard.module.css";
import { numFormater } from "@/app/lib/utils";
import Card from "./Card";
import clsx from "clsx";

const Dashboard = async () => {
  const totalExport = await getTotalExport();
  const totalImport = await getTotalImport();
  console.log(typeof numFormater(totalExport));
  return (
    <div className={styles.container}>
      <Card
        text={"Total Export"}
        number={numFormater(totalExport, true)}
        href={"/export"}
      >
        <ArrowUpRightIcon className={clsx(styles.svg, styles.exportSvg)} />
      </Card>
      <Card
        text={"Total Import"}
        number={numFormater(totalImport, true)}
        href={"/import"}
      >
        <ArrowDownRightIcon className={clsx(styles.svg, styles.importSvg)} />
      </Card>
    </div>
  );
};

export default Dashboard;
