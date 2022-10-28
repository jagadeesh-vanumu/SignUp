
import { useDispatch, useSelector } from "react-redux";
import { signUpActions } from "../store/signup-slice";
import Input from "../components/Input";
import { SignUpSubmissionUpdate } from "../store/signUp-actions";
import { useNavigate ,} from "react-router-dom";
import React, { useEffect} from "react";




const SignUp = () => {
  
  
  const state = useSelector((state) => state.signUp);
  const isRegistered = useSelector(state => state.signUp.registered);

  useEffect(()=> {
    if (isRegistered) {
      navigate("/login")
    }
  },[isRegistered])

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const updateState = (e) => {
    dispatch(
      signUpActions.detailsUpdate({
        key: e.target.id,
        value: e.target.value,
      })
    );
  };

  const updateChecked = () => {
    dispatch(signUpActions.checkBoxUpdate());
  };

  const submitForm = async(e) => {
    e.preventDefault();
    if (state.details.password !== state.details.confirmPassword) {
      alert("Passwords do not match");
    } else {
      dispatch(SignUpSubmissionUpdate(state));
    }
  };

 

  

  

  return (
    <div
      className="flex justify-center items-center h-screen bg-green-500 bg-cover"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dtkberly2/image/upload/v1665073780/shopping-corner_2x.f5501ebe0032_ziausd.png")`,
      }}
    >
      <form
        className="md:w-1/2 rounded-md border-solid border-black p-10 bg-white flex flex-col justify-between"
        onSubmit={submitForm}
      >
        <div className="md:flex md:justify-between ">
          <Input
            id="firstName"
            type="text"
            title="First Name"
            method={updateState}
            value={state.details.firstName}
            css="md:w-1/2 my-2"
          />
          <Input
            id="lastName"
            type="text"
            title="Last Name"
            method={updateState}
            value={state.details.lastName}
            css="md:w-1/2 md:mx-3 my-2"
          />
        </div>
        <Input
          id="email"
          type="email"
          title="Email"
          method={updateState}
          value={state.details.email}
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          css="my-2"
        />
        <Input
          id="password"
          type="password"
          title="Password"
          method={updateState}
          value={state.details.password}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          css="my-2"
        />
        <Input
          id="confirmPassword"
          type="password"
          title="Confirm Password"
          method={updateState}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          value={state.details.confirmPassword}
          css="my-2"
        />
        <Input
          id="date"
          type="date"
          title="Date"
          method={updateState}
          value={state.details.date}
          css="my-2"
        />

        <div className="my-2">
          <input
            type="checkbox"
            checked={state.checked}
            name="Date"
            onChange={updateChecked}
            required
            id="checkbox"
          />
          <label className="ml-3" htmlFor="checkbox">
            I agree to the terms and conditions
          </label>
        </div>
        <button className="bg-blue-200 py-3 rounded-md my-2" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
