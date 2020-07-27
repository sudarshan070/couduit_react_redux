import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    let userUrl = "https://conduit.productionready.io/api/users";
    fetch(userUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state }),
    }).then((res) => {
      if (res.status === 200) {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    let { username, password, email } = this.state;
    return (
      <div className="container">
        <div className="form-container">
          <div className="form-heading">
            <h2>Sign up</h2>
            <Link className="form-subheading" to="/login">
              Have an account?
            </Link>
          </div>

          <input
            className="form-control"
            type="text"
            name="username"
            value={username}
            onChange={this.handleInput}
            placeholder="UserName"
          />
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInput}
            placeholder="Email"
          />
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={this.handleInput}
            placeholder="Password"
          />
          <button onClick={this.handleSubmit} className="btnRegisterLogin">
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
export default connect()(Register);
