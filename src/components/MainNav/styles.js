import { makeStyles } from "@material-ui/core";

import {
  caramel_light,
  caramel_dark,
  background,
  text_color,
} from "../../variables/variables";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: background,
    zIndex: 100,
  },
}));
