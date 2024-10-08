import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
  }, //different reducer from different slices
});

export default appStore;
