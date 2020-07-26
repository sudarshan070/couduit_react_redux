import React, { useState } from "react";
import { registerUser } from "../action/action";
import { connect } from "react-redux";

 function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log('handleClick')
    const user = {
      user: {
        username,
        email,
        password,
      },
    };
    props.dispatch(registerUser(user, props.history))
    console.log(user, 'user')
  };

  return (
    <div className="container">
      <div className="form-container">
        <div>
          <h2>Sign up</h2>
          <a href="/login">Have an account</a>
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
        <button onClick={handleSubmit} className="btn btn-success">
          Sign Up
        </button>
      </div>
    </div>
  );
}
 export default connect()(Register)