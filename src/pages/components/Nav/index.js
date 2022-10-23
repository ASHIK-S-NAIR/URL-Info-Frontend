import { isAuthenticated, logout } from "api/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Nav = () => {
  const navigate = useNavigate();

  const clickLogout = () => {
    if (logout()) {
      navigate("/");
    }
  };

  const nonAuthenticatedUsers = () => {
    return (
      <div className="nav-cta-section">
        <Link to="/login">
          <button className="btn-cta btn-cta-outline nav-cta-login">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="btn-cta nav-cta-signup">
            Sign up - <span>its free</span>
          </button>
        </Link>
      </div>
    );
  };

  const authenticatedUsers = () => {
    return (
      <div className="nav-cta-section">
        <button
          className="btn-cta btn-cta-outline nav-cta-login"
          onClick={clickLogout}
        >
          Log out
        </button>
      </div>
    );
  };

  return (
    <nav className="nav-section">
      <div className="wrap nav-wrap">
        <div className="nav-logo">
          <Link to="/">
            <h1 className="nav-logo-h1">SuiteJar</h1>
          </Link>
        </div>
        {isAuthenticated() ? authenticatedUsers() : nonAuthenticatedUsers()}
      </div>
    </nav>
  );
};

export default Nav;
