import { ItemCard } from "./ItemCard";
import styles from "./ItemsList.module.css";

export const ItemsList = ({ itemsList }) => {
  if (itemsList.length === 0) {
    return <h3 className={styles["list-container--empty"]}>Empty list</h3>;
  }

  return (
    <ul className={styles["list-container"]}>
      {itemsList.map((item) => (
        <ItemCard key={item.uuid} item={item} />
      ))}
    </ul>
  );
};
