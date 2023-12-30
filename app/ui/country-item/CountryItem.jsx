import { normilized, numFormater } from "@/app/lib/utils";
import styles from "./item.module.css";

const CountryItem = ({ data }) => {
  return (
    <div className={styles.container}>
      <h3>
        Top {data?.length} {data[0]?.type}ed Product Item(s)
      </h3>
      <ol className={styles.list}>
        {data.map((d) => (
          <li key={d.category}>
            {d?.name || d.category}: <b>${numFormater(d.total_cost, true)}</b> (
            {normilized(d.total_share, 3)}% of its total export)
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CountryItem;
