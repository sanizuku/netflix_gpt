import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieName: null,
    movieResult: null,
    infoPage: false,
    trailerId: null,
  },
  reducers: {
    toogleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    movieInfo: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
    clickDescription: (state, action) => {
      state.infoPage = !state.infoPage;
      state.trailerId = action.payload;
    },
  },
});
export const { toogleGptSearchView, movieInfo, clickDescription } =
  gptSlice.actions;
export default gptSlice.reducer;
