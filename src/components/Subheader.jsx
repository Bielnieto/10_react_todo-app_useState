import styles from "./Subheader.module.css";

export const Subheader = ({ subtitle }) => {
  return <h2 className={styles["subheader"]}>{subtitle}</h2>;
};
