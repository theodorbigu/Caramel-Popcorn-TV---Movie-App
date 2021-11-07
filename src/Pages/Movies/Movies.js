import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import Genres from "../../components/Genres/Genres";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenres from "../../hooks/useGenre";
import {
  caramel_light,
  caramel_dark,
  background,
  text_color,
} from "../../variables/variables";

const useStyles = makeStyles((theme) => ({
  movies: {
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
    color: text_color,
    [theme.breakpoints.down("md")]: {
      fontSize: "6.4vw",
    },
  },
}));

const Movies = () => {
  const REACT_APP_API_KEY = "85bf419e2a5689bd392bcd437433803e";

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genreforURL = useGenres(selectedGenres);

  const classes = useStyles();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );

    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div>
      <span className={classes.pageTitle}>Movies</span>
      <Genres
        type="movie"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className={classes.movies}>
        {content &&
          content.map((el) => (
            <SingleContent
              key={el.id}
              id={el.id}
              poster={el.poster_path}
              title={el.title || el.name}
              date={el.first_air_date || el.release_date}
              media_type="movie"
              vote_average={el.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
