import { makeStyles } from "@material-ui/core";
import { useState } from "react";
//import { useHistory } from "react-router";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const [headerActive, setHeaderActive] = useState(false);

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }

    lastScrollY = window.scrollY;
  });
  return (
    <div>
      <span
        onClick={() => window.scroll(0, 0)}
        className={`${classes.header} ${
          headerActive ? classes.header_active : ""
        }`}
      >
        🍿 Caramel Popcorn TV
      </span>
    </div>
  );
};

export default Header;
