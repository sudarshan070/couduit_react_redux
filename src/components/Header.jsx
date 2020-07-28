import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  const { isLoggedIn } = props.state;
  return (
    <div className="container-header">
      <div>
        <Link className="logo" to="/">
          conduit
        </Link>
      </div>
      <>{isLoggedIn ? <AuthHeader {...props} /> : <NonAuthHeader />}</>
    </div>
  );
}

function mapToState(state) {
  return { state };
}

export default connect(mapToState)(Header);

const NonAuthHeader = () => (
  <nav className="nav-bar">
    <NavLink className="nav-list" to="/" exact>
      Home
    </NavLink>
    <NavLink className="nav-list" activeClassName="active" to="/login">
      Sign in
    </NavLink>
    <NavLink className="nav-list" activeClassName="active" to="/register">
      Sign up
    </NavLink>
  </nav>
);

const AuthHeader = (props) => (
  <nav className="nav-bar">
    <NavLink className="nav-list" to="/" exact>
      Home
    </NavLink>
    <NavLink className="nav-list" activeClassName="active" to="/newPost">
      New Post
    </NavLink>
    <NavLink className="nav-list" activeClassName="active" to="/setting">
      Setting
    </NavLink>
    <NavLink className="nav-list" activeClassName="active" to="/">
      username
    </NavLink>
  </nav>
);
