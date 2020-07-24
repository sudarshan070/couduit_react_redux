import React from "react";
import { button } from "react-bootstrap";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handelSubmit = () => {
    let userUrl = "/api/users/login";
    fetch(userUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.token) {
          localStorage.setItem("authToken", user.token);
          this.props.updateLoggedIn(true);
          this.props.history.push("/");
        } else {
          this.setState({ error: "Something Went Wrong!" });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="form-container">
        <div className="container">
          <div>
            <h2>Sign In</h2>
            <a href="/register">You need an account?</a>
          </div>
          <input
            className="form-control"
            name="email"
            type="email"
            onChange={this.handleInput}
            value={email}
            placeholder="Email"
          />
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={this.handleInput}
            value={password}
            placeholder="Password"
          />
          <span className="error-msg">{error && error}</span>
          <button
            type="button"
            onClick={this.handelSubmit}
            className="btn btn-success"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }
}
