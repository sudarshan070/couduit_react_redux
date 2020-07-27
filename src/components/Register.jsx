import React, { useState } from "react";
import { registerUser } from "../action/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const user = {
      user: {
        username,
        email,
        password,
      },
    };
    props.dispatch(registerUser(user, props.history));
    console.log(user, "user");
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className='form-heading'>
          <h2>Sign up</h2>
          <Link className='form-subheading' to="/login">Have an account?</Link>
        </div>

        <input
          className="form-control"
          type="text"
          name="username"
          onChange={({ target: { value } }) => setUsername(value)}
          placeholder="UserName"
        />
        <input
          className="form-control"
          type="email"
          name="email"
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder="Email"
        />
        <input
          className="form-control"
          type="password"
          name="password"
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="Password"
        />
        <button onClick={handleSubmit} className="btnRegisterLogin">
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default connect()(Register);
