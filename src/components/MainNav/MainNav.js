import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import {
  caramel_light,
  caramel_dark,
  background,
  text_color,
} from "../../variables/variables";

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    // eslint-disable-next-line
    switch (value) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/movies");
        break;
      case 2:
        history.push("/series");
        break;
      case 3:
        history.push("/search");
        break;
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: text_color }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: text_color }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: text_color }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: text_color }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
