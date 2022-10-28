import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";

import signUpSlice from "./signup-slice";


const store = configureStore({
  reducer: {
    signUp: signUpSlice.reducer,
    login: loginSlice.reducer,
  }})



  export default store
