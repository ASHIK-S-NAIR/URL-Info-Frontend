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
        <Link to="/">
          <div className="nav-logo-sec">
            <img className="nav-logo-img" src={LogoSvg} alt="SuiteJar" />
            <div className="nav-logo-info">
              <h1 className="nav-logo-h1">SuiteJar</h1>
              <a href="https://growth.cx/" className="nav-logo-a">
                by growth.cx
              </a>
            </div>
          </div>
        </Link>
        {isAuthenticated() ? <AuthenticatedUsers /> : <NonAuthenticatedUsers />}
      </div>
    </nav>
    // Nav section ends
  );
};

export default Nav;
