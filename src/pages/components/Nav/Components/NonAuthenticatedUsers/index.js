import React from "react";
import { Link } from "react-router-dom";

const NonAuthenticatedUsers = ({ responsive }) => {
  return (
    // NonAuthenticated section starts
    <div
      className={`nav-cta-section ${
        responsive === true ? "nav-cta-section-responsive" : ""
      }`}
    >
      <Link to="/login">
        <button
          className={`btn-cta btn-cta-outline nav-cta-login ${
            responsive === true ? "btn-cta-responsive" : ""
          }`}
        >
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button
          className={`btn-cta nav-cta-signup ${
            responsive === true ? "btn-cta-responsive" : ""
          }`}
        >
          Sign up
        </button>
      </Link>
    </div>
    // NonAuthenticated section ends
  );
};

export default NonAuthenticatedUsers;
