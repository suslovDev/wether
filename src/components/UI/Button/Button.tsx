import { ReactNode } from "react";
import styles from "./Button.module.css";

const Button = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className={styles.button}>{children}</div>;
};

export default Button;
