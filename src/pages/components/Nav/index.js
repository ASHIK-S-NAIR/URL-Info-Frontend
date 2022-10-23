import { isAuthenticated } from "api/auth";
import React from "react";
import { Link } from "react-router-dom";
import AuthenticatedUsers from "./Components/AuthenticatedUsers";
import NonAuthenticatedUsers from "./Components/NonAuthenticatedUsers";
import "./style.css";

const Nav = () => {

  return (
    // Nav section starts
    <nav className="nav-section">
      <div className="wrap nav-wrap">
        <div className="nav-logo">
          <Link to="/">
            <h1 className="nav-logo-h1">SuiteJar</h1>
          </Link>
        </div>
        {isAuthenticated() ? <AuthenticatedUsers /> : <NonAuthenticatedUsers />}
      </div>
    </nav>
    // Nav section ends
  );
};

export default Nav;
