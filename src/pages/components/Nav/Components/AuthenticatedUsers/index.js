import { logout } from "api/auth";
import { AuthContext } from "contexts/authContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticatedUsers = ({ responsive }) => {
  const { setUserAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // clickLogout - Function to handle logout
  const clickLogout = () => {
    if (logout()) {
      setUserAuthenticated(false);
      navigate("/");
    }
  };
  return (
    // Authenticated section starts
    <div
      className={`nav-cta-section ${
        responsive === true ? "nav-cta-section-responsive" : ""
      }`}
    >
      <button
        className="btn-cta btn-cta-outline nav-cta-logout"
        onClick={clickLogout}
      >
        Log out
      </button>
    </div>
    // Authenticated section ends
  );
};

export default AuthenticatedUsers;
