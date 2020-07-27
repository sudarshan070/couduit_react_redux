import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../action/action";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    let userUrl = "https://conduit.productionready.io/api/users/login";
    this.props.dispatch(
      fetchUser(userUrl, { ...this.state }, this.props.history)
    );
  };

  render() {
    const { email, password } = this.state;
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
            value={email}
            placeholder="Email"
            onChange={this.handleInput}
          />
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleInput}
          />
          <button
            onClick={this.handleSubmit}
            type="button"
            className="btnRegisterLogin"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
