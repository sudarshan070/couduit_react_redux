import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {loginUser} from '../action/action'

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = () => {
    const user = {
      user: {
        email,
        password,
      },
    };
    props.dispatch(loginUser(user, props.history));
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-heading">
          <h2>Sign In</h2>
          <Link className="form-subheading" to="/register">
            You need an account?
          </Link>
        </div>
        <input
          className="form-control"
          name="email"
          type="email"
          onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          placeholder="Email"
        />
        <input
          className="form-control"
          type="password"
          name="password"
          onChange={({ target: { value } }) => setPassword(value)}
          value={password}
          placeholder="Password"
        />
        <button
          type="button"
          onClick={handelSubmit}
          className="btnRegisterLogin"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default connect()(Login);
