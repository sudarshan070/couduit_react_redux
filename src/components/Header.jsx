import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container-header">
      <div className="logo">
        <Link>
          <h1>conduit</h1>
        </Link>
      </div>
      <nav className="nav-bar">
        <Link className="nav-list">Home</Link>
        <Link className="nav-list">Login</Link>
        <Link className="nav-list">Register</Link>
      </nav>
    </div>
  );
}
