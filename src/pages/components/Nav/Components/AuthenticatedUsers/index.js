import { logout } from "api/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthenticatedUsers = ({responsive}) => {
  const navigate = useNavigate();

  // clickLogout - Function to handle logout
  const clickLogout = () => {
    if (logout()) {
      navigate("/");
    }
  };
  return (
    // Authenticated section starts
    <div className={`nav-cta-section ${responsive === true ? "nav-cta-section-responsive" : ""}`}>
      <button
        className="btn-cta btn-cta-outline nav-cta-login"
        onClick={clickLogout}
      >
        Log out
      </button>
    </div>
    // Authenticated section ends
  );
};

export default AuthenticatedUsers;
