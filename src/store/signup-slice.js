import { createSlice } from "@reduxjs/toolkit";



const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    registered:false,
    details: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      date: "",
      checked: false,
    },
  },
  reducers: {
    detailsUpdate(state, action) {
      state.details[action.payload.key] = action.payload.value;
    },
    checkBoxUpdate(state) {
      state.details.checked = !state.details.checked;
    },
    isRegistered(state) {
      state.registered = true;
    }
    
  },
});

export const signUpActions = signUpSlice.actions;

export default signUpSlice;
