import ResponsiveAppBar from "../Navdar/Navbar";
import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header /* className={styles.header} */>
      <ResponsiveAppBar />
    </header>
  );
};

export default Header;
