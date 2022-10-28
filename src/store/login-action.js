import startFirebase from "../components/firebaseConfig";
import { ref, get, child } from "firebase/database";

import bcrypt from "bcryptjs";

export const LoginSubmissionUpdate = (state) => {
  return async () => {
    const id = state.details.email.split("@")[0];

    const dbref = ref(startFirebase());

    const password = state.details.password;

    get(child(dbref, "users/" + id)).then((snapshot) => {
      if (snapshot.exists()) {
        const value = bcrypt.compare(snapshot.val().password, password);
        if (value) {
          alert("success");
        } else {
          alert("Incorrect Password! Try again");
        }
      } else {
        alert("Not Registered! Please SignUp first.");
      }
    });
  };
};
