import { Link, useMatch } from "react-router-dom";

import styles from "./Navbar.module.css";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const Navbar = (): JSX.Element => {
  const matchFavorites = useMatch(`/favorites`);
  const matchHome = useMatch(`/`);

  /*   return (
    <nav className={styles.navbar}>
      <Link to={"/"} className={matchHome ? styles.active : ""}>
        Домой
      </Link>
      <Link to={"/settings"} className={matchFavorites ? styles.active : ""}>
        Настройки
      </Link>
    </nav>
  ); */
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Домой" />

        <Tab label="Настройки" />
      </Tabs>
    </Box>
  );
};

export default Navbar;
