import React from "react";
import { Link } from "react-router-dom";

const NonAuthenticatedUsers = () => {
  return (
    // NonAuthenticated section starts
    <div className="nav-cta-section">
      <Link to="/login">
        <button className="btn-cta btn-cta-outline nav-cta-login">Login</button>
      </Link>
      <Link to="/signup">
        <button className="btn-cta nav-cta-signup">
          Sign up - <span>its free</span>
        </button>
      </Link>
    </div>
    // NonAuthenticated section ends
  );
};

export default NonAuthenticatedUsers;

