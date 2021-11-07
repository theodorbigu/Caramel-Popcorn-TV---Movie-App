import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import "./ContentModal.css";
import Carousel from "./Carousel/Carousel";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import {
  caramel_light,
  caramel_dark,
  background,
  text_color,
} from "../../variables/variables";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "100%",
    backgroundColor: "#39445a",
    borderRadius: 10,
    color: text_color,
    padding: theme.spacing(1, 1, 3),
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
    cursor: "pointer",

    "&:hover": {
      backgroundColor: caramel_light,
      color: "black",
      transition: "all ease .3s",
    },
    [theme.breakpoints.down("xs")]: {
      width: "46%",
    },
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "80%",
  borderRadius: 10,
  bgcolor: "#39445a",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fetchData = async () => {
    const REACT_APP_API_KEY = "85bf419e2a5689bd392bcd437433803e";
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`
    );
    console.log(data);

    setContent(data);
  };
  const fetchVideo = async () => {
    const REACT_APP_API_KEY = "85bf419e2a5689bd392bcd437433803e";
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${REACT_APP_API_KEY}&language=en-US`
    );
    // console.log(data);

    setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);
  const classes = useStyles();
  return (
    <>
      <div className={classes.media} onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content && (
              <div className={classes.paper}>
                <div className="ContentModal">
                  <img
                    src={
                      content.poster_path
                        ? `${img_500}/${content.poster_path}`
                        : unavailable
                    }
                    alt={content.name || content.title}
                    className="ContentModal__portrait"
                  />
                  <img
                    src={
                      content.backdrop_path
                        ? `${img_500}/${content.backdrop_path}`
                        : unavailableLandscape
                    }
                    alt={content.name || content.title}
                    className="ContentModal__landscape"
                  />
                  <div className="ContentModal__about">
                    <span className="ContentModal__title">
                      {content.name || content.title} (
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                      ).substring(0, 4)}
                      )
                    </span>
                    {content.tagline && (
                      <i className="tagline">{content.tagline}</i>
                    )}

                    <span className="ContentModal__description">
                      {content.overview}
                    </span>

                    <div>
                      <Carousel id={id} media_type={media_type} />
                    </div>

                    <Button
                      variant="contained"
                      startIcon={<YouTubeIcon />}
                      color="error"
                      target="__blank"
                      href={`https://www.youtube.com/watch?v=${video}`}
                    >
                      Watch the Trailer
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
