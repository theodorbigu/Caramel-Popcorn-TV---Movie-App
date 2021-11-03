import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/CustomPagination";
import SingleContent from "../../components/SingleContent";

const setStyles = makeStyles((theme) => ({
  trending: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  pageTitle: {
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2vw",
    padding: "4px",
    borderRadius: 50,
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "6.4vw",
    },
  },
}));

const Trending = () => {
  const REACT_APP_API_KEY = "85bf419e2a5689bd392bcd437433803e";

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const classes = setStyles();

  const fetchTrending = async () => {
    const { data } = await axios.get(`
        https://api.themoviedb.org/3/trending/movie/week?api_key=${REACT_APP_API_KEY}&page=${page}`);

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className={classes.pageTitle}>Trending</span>
      <div className={classes.trending}>
        {content &&
          content.map((el) => (
            <SingleContent
              key={el.id}
              id={el.id}
              poster={el.poster_path}
              title={el.title || el.name}
              date={el.first_air_date || el.release_date}
              media_type={el.media_type}
              vote_average={el.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
