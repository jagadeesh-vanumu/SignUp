
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import Input from "../components/Input";
import { LoginSubmissionUpdate } from "../store/login-action";
import { loginActions } from "../store/login-slice";




const Login = () => {
  const dispatch = useDispatch()

  const state = useSelector(state => state.login)
  

  const updateState = (e) => {
    dispatch(loginActions.detailsUpdate({
      key:e.target.id,
      value:e.target.value,
    }))
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(LoginSubmissionUpdate(state))
   
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500 bg-cover opacity-1" style={{
      backgroundImage: `url("https://res.cloudinary.com/dtkberly2/image/upload/v1666163580/log_cnn78j.avif")`,
    }}>
      <form
        className="md:w-1/3 h-1/2 rounded-md border-solid border-black p-10 py-10 bg-white flex flex-col justify-between opacity-90"
        onSubmit={submitForm}
      >
      <h1 className="text-center text-xl">LOGIN FORM</h1>
      <Input
          id="email"
          type="email"
          title="Email"
          method={updateState}
          value={state.email}
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          css="my-2"
        />
        <Input
          id="password"
          type="password"
          title="Password"
          method={updateState}
          value={state.password}
          pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          css="my-2"
        />
        
        
        <button className="bg-blue-200 py-3 rounded-md" type="submit">
          Login
        </button>
        <p>Don't have an account?<Link to ="/"> <span className="text-red-800">register</span></Link></p>
      </form>
    </div>
  );
};

export default Login;
