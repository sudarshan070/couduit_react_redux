import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header({ isLoggedIn }) {
  return (
    <div className="container-header">
      <div>
        <Link className="logo" to="/">
          conduit
        </Link>
      </div>
      <>{isLoggedIn ? <AuthHeader /> : <NonAuthHeader />}</>
    </div>
  );
}

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

const AuthHeader = () => (
  <nav className="nav-bar">
    <NavLink className="nav-list" to="/" exact>
      Home
    </NavLink>
    <NavLink className="nav-list" activeClassName="active" to="/login">
      newArticle
    </NavLink>
    <NavLink className="nav-list" activeClassName="active" to="/register">
      setting
    </NavLink>
    <NavLink className="nav-list" activeClassName="active" to="/register">
      setting
    </NavLink>
  </nav>
);
