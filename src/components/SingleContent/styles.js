import { makeStyles } from "@material-ui/core";

import {
  caramel_light,
  caramel_dark,
  background,
  text_color,
} from "../../variables/variables";

export default makeStyles((theme) => ({
  subTitle: {
    display: "flex",
    paddingBottom: "3px",
    justifyContent: "space-between",
    padding: "0 2px",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 17,
    padding: "8px 0",
  },
  poster: {
    borderRadius: 10,
  },
}));
