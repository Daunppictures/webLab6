import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import MessageBox from "../Components/MessageBox";

export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
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
          <h1>Sign In</h1>
          
          {error && <MessageBox variant='danger'>{error}</MessageBox>}

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
            <label
              className="signin-label"
              className="signin-label"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div className="signin-button-wrapper">
            <label />
            <button className="signin-button" type="submit">
              Sign In
            </button>
          </div>
          <div>
            <label />
            <div className="signin-reg-text">
              New customer? <Link to="/register">Create your account</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
