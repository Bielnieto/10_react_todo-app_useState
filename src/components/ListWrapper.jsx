import styles from "./ListWrapper.module.css";

export const ListWrapper = ({ children }) => {
  return <section className={styles["list__wrapper"]}>{children}</section>;
};
