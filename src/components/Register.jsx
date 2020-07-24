import React from "react";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log("handleSubmit");
    let userUrl = "https://conduit.productionready.io/api/users";
    fetch(userUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state }),
    }).then((res) => {
      console.log(res, "response is here");
      if (res.status === 200) {
        this.props.history.push("/login");
      }
      return res.json();
    });
  };

  render() {
    const { username, password, email } = this.state;
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
          <button onClick={this.handleSubmit} className="btn btn-success">
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
