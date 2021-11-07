import { makeStyles } from "@material-ui/core";

import {
  caramel_light,
  caramel_dark,
  background,
  text_color,
} from "../../variables/variables";

export default makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "fit-content",
    cursor: "pointer",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    backgroundColor: caramel_light,
    fontFamily: "Pacifico,Montserrat,serif",
    fontSize: "3rem",
    paddingBottom: "1vh",
    paddingTop: "1vh",
    // paddingLeft: "10vw",
    // boxShadow: "0px 0px 4px 5px #EDC66D",
    color: "black",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "15px",
      fontSize: "6.4vw",
    },
    transition: "transform ease 0.2s",
  },
  header_active: {
    transition: "transform ease 0.2s",
    transform: "translateY(-15vh)",
  },
}));
