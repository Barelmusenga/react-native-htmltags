import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React Native Html Tags
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <NavLink className="nav-item nav-link" to="/documentation">
            Documentation
          </NavLink>
          <NavLink className="nav-item nav-link" to="/github" target="_blank">
            GitHub
          </NavLink>
          <NavLink className="nav-item nav-link" to="/blog">
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;