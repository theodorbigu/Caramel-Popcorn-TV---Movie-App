import { Badge, makeStyles } from "@material-ui/core";
import { img_300, unavailable } from "../config/config";

const useStyles = makeStyles((theme) => ({
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
  media: {
    display: "flex",
    flexDirection: "column",
    width: "200px",
    padding: 5,
    margin: "5px 0",
    backgroundColor: "#282c34",
    borderRadius: 10,
    position: "relative",
    fontFamily: "Montserrat",
    transition: "all ease .5s",

    "&:hover": {
      backgroundColor: "white",
      color: "black",
      transition: "all ease .3s",
    },
    [theme.breakpoints.down("xs")]: {
      width: "46%",
    },
  },
  poster: {
    borderRadius: 10,
  },
}));

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.media}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className={classes.poster}
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className={classes.title}>{title}</b>
      <span className={classes.subTitle}>
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className={classes.subTitle}>{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;

//`${img_300}/${poster}`
