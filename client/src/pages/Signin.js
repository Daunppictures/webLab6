import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin container">
      <div className="signin-wrapper">
        <form className="signin-form" onSubmit={submitHandler}>
          <h1>Sign In</h1>

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
            <div className='signin-reg-text'>
              New customer? <Link to="/register">Create your account</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
