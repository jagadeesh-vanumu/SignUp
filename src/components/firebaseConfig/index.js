import {initializeApp} from "firebase/app"
import {getDatabase} from "firebase/database"

const startFirebase = () => {
    const firebaseConfig = {

        apiKey: "AIzaSyDqzl-tqiaytRywUSJ9fJEGu5ZVMbYPbJ4",
      
        authDomain: "redux-http-68db6.firebaseapp.com",
      
        databaseURL: "https://redux-http-68db6-default-rtdb.firebaseio.com",
      
        projectId: "redux-http-68db6",
      
        storageBucket: "redux-http-68db6.appspot.com",
      
        messagingSenderId: "219756157532",
      
        appId: "1:219756157532:web:eb159537f6a539bd506499",
      
        measurementId: "G-72Z06XDY9K"
      
      };

      const app = initializeApp(firebaseConfig) ;
      return getDatabase(app);
      
}

export default startFirebase;