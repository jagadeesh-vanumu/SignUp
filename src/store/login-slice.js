import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    details: {
      email: "",
      password: "",
    },
  },
  reducers: {
    detailsUpdate: (state, action) => {
      state.details[action.payload.key] = action.payload.value;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
