import { Outlet } from "react-router-dom";

import Header from "../../widgets/Header/Header";
import styles from "./General.module.css";

const General = (): JSX.Element => {
  return (
    <div className={styles.general}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default General;
