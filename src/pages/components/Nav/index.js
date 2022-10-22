import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <nav className="nav-section">
      <div className="wrap nav-wrap">
        <div className="nav-logo">
          <Link to="/">
            <h1 className="nav-logo-h1">SuiteJar</h1>
          </Link>
        </div>
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
      </div>
    </nav>
  );
};

export default Nav;
