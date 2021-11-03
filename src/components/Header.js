import { makeStyles } from "@material-ui/core";
//import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    cursor: "pointer",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    textTransform: "uppercase",
    backgroundColor: "#39445a",
    fontFamily: "Montserrat",
    fontSize: "5vw",
    paddingBottom: "15px",
    boxShadow: "0px 1px 5px black",
    color: "white",
    zIndex: "100",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "15px",
      fontSize: "6.4vw",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  //const history = useHistory();
  return (
    <div>
      <span onClick={() => window.scroll(0, 0)} className={classes.header}>
        🎬 Ruxa Movies Hub 📹
      </span>
    </div>
  );
};

export default Header;
