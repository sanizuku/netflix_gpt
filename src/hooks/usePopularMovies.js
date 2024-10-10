import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // Fetch data from tmdb api and update store
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_URL, API_OPTIONS);
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
