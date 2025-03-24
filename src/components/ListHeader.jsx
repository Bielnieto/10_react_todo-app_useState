import styles from "./ListHeader.module.css";

export const ListHeader = ({ content }) => {
  return <h3 className={styles["list__header"]}>{content}</h3>;
};
