import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../action/action";
import { connect } from "react-redux";

import "redux-bootstrap";

class Setting extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="form-container">
          <p>Your Setting</p>
          <input
            className="form-control article-form-control"
            type="text"
            placeholder="URL of profile picture"
          />
          <input className="form-control" type="text" placeholder="username" />
          <textarea
            className="form-control"
            name=""
            placeholder="short bio about you"
            cols="30"
            rows="6"
          ></textarea>
          <input
            className="form-control article-form-control"
            type="text"
            placeholder="email"
          />
          <input
            className="form-control"
            type="text"
            placeholder="New password"
          />
          <button className="btnRegisterLogin" type="submit">
            Update Setting
          </button>
          <div className="logout-button">
            <Link
              onClick={() => logoutUser(this.props.dispatch)}
              to="/"
              class="btn-logout"
            >
              Or Click here to logout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Setting);
