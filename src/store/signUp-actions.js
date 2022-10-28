
import startFirebase from "../components/firebaseConfig";
import { ref, set, get, child } from "firebase/database";
import { signUpActions } from "./signup-slice";
import bcrypt from "bcryptjs"



 
 
 export const SignUpSubmissionUpdate = (state) => {

    return async(dispatch) => {
    
        
      const id = state.details.email.split("@")[0];
      const db = startFirebase();

      const password = state.details.password 
      const hashPassword = bcrypt.hash(password,10)
      
      const details = {
        email: state.details.email,
        password: hashPassword,
        firstName: state.details.firstName,
        lastName: state.details.lastName,
        date: state.details.date,
        checked: state.details.checked,
      }

      const dbref = ref(startFirebase());

      
     
     await get(child(dbref, "users/" + id)).then(async(snapshot) => {
        if (snapshot.exists()) {
          alert("mail already registerd");
        } else {
        await set(ref(db, "/users/" + id), details);
        dispatch(signUpActions.isRegistered())   
        }
      }); 
     
    }
    
    
 }
 
 
 
 
 
 
 
