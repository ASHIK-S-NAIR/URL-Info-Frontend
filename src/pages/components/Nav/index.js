import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthenticatedUsers from "./Components/AuthenticatedUsers";
import NonAuthenticatedUsers from "./Components/NonAuthenticatedUsers";
import LogoSvg from "../../../assets/logo/logo.svg";
import { AuthContext } from "contexts/authContext";
import "./style.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const {userAuthenticated} = useContext(AuthContext);


  return (
    // Nav section starts
    <nav
      className={`nav-section ${toggle === true ? "nav-section-black-bg" : ""}`}
      onClick={toggle === true ? () => setToggle(!toggle) : null}
    >
      <div className="wrap nav-wrap">
        <div className="nav-logo-sec">
          <Link to="/" >
            <img className="nav-logo-img" src={LogoSvg} alt="SuiteJar" />
          </Link>
          <div className="nav-logo-info">
            <Link to="/">
              <h1 className="nav-logo-h1">OptEngine</h1>
            </Link>
          </div>
        </div>

        {userAuthenticated ? (
          <AuthenticatedUsers responsive={false} />
        ) : (
          <NonAuthenticatedUsers responsive={false} />
        )}
        <div className="nav-toggle-sec" onClick={() => setToggle(!toggle)}>
          <div className="nav-toggle-bar nav-toggle-bar-first"></div>
          <div className="nav-toggle-bar nav-toggle-bar-second"></div>
          <div className="nav-toggle-bar nav-toggle-bar-third"></div>
        </div>
      </div>
      {toggle && (
        <div className="wrap nav-wrap nav-wrap-responsive" onClick={() => setToggle(!toggle)}>
          {userAuthenticated ? (
            <AuthenticatedUsers responsive={true} />
          ) : (
            <NonAuthenticatedUsers responsive={true} />
          )}
        </div>
      )}
    </nav>
    // Nav section ends
  );
};

export default Nav;
