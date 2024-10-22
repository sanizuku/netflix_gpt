import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { background_Img } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10  ">
        <img
          className="h-screen object-cover md:object-none md:h-auto"
          src={background_Img}
          alt="bgImg"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
