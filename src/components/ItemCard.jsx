import styles from "./ItemCard.module.css";

export const ItemCard = ({ item }) => {
  const statusClassName = {
    done: styles["item-card__status--done"],
    pending: styles["item-card__status--pending"],
    "in progress": styles["item-card__status--progress"],
  };

  return (
    <li className={styles["item-card__container"]}>
      <h3 className={styles["item-card__title"]}>{item.title}</h3>
      <p className={styles["item-card__description"]}>{item.description}</p>
      <span
        className={`${styles["item-card__status"]} ${
          statusClassName[item.status]
        }`}
      >
        {item.status}
      </span>
    </li>
  );
};
