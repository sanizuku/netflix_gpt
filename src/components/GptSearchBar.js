import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { movieInfo } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();
  const handleGptSearchClick = async () => {
    const movieResults = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&page=1`,
      API_OPTIONS
    );

    const res = await movieResults.json();

    dispatch(
      movieInfo({
        movieName: searchText.current.value,
        movieResult: res?.results,
      })
    );

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like example results given ahead. Example Results: Gadar, Sholay, Don, Golmaal, Koi mil gaya";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4  w-2/3"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="w-1/3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
