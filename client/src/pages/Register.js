import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import MessageBox from "../Components/MessageBox";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(false);

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      if(password.length >= 5) {
        dispatch(register(name, email, password));
      } else {
        setPasswordLength(true);
      }
      
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="signin container">
      <div className="signin-wrapper">
        <form className="signin-form" onSubmit={submitHandler}>
          <h1>Register</h1>
          {passwordLength && <MessageBox variant="danger">Password is too short</MessageBox>}
          {loading && <MessageBox variant="succes">Please, wait</MessageBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}

          <div className="signin-input-wrapper">
            <input
              className="signin-input"
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label className="signin-label" htmlFor="name">
              Name
            </label>
          </div>

          <div className="signin-input-wrapper">
            <input
              className="signin-input"
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="signin-label" htmlFor="email">
              Email address
            </label>
          </div>
          <div className="signin-input-wrapper">
            <input
              className="signin-input"
              type="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="signin-label" htmlFor="password">
              Password
            </label>
          </div>
          <div className="signin-input-wrapper">
            <input
              className="signin-input"
              type="password"
              id="confirmPassword"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className="signin-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
          </div>
          <div className="signin-button-wrapper">
            <label />
            <button className="signin-button" type="submit">
              Register
            </button>
          </div>
          <div>
            <label />
            <div className="signin-reg-text">
              Already have an account? <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
