import { isAuthenticated } from "api/auth";
import React from "react";
import { Link } from "react-router-dom";
import AuthenticatedUsers from "./Components/AuthenticatedUsers";
import NonAuthenticatedUsers from "./Components/NonAuthenticatedUsers";
import LogoSvg from "../../../assets/logo/logo.svg";
import "./style.css";

const Nav = () => {
  return (
    // Nav section starts
    <nav className="nav-section">
      <div className="wrap nav-wrap">
        <div className="nav-logo-sec">
          <Link to="/">
            <img className="nav-logo-img" src={LogoSvg} alt="SuiteJar" />
          </Link>
          <div className="nav-logo-info">
            <Link to="/">
              <h1 className="nav-logo-h1">SuiteJar</h1>
            </Link>
            <a href="https://growth.cx/" className="nav-logo-a">
              by growth.cx
            </a>
          </div>
        </div>

        {isAuthenticated() ? <AuthenticatedUsers /> : <NonAuthenticatedUsers />}
        <div className="nav-toggle-sec">
          <div className="nav-toggle-bar nav-toggle-bar-first"></div>
          <div className="nav-toggle-bar nav-toggle-bar-second"></div>
          <div className="nav-toggle-bar nav-toggle-bar-third"></div>
        </div>
      </div>
      {isAuthenticated() ? <AuthenticatedUsers /> : <NonAuthenticatedUsers />}
    </nav>
    // Nav section ends
  );
};

export default Nav;
