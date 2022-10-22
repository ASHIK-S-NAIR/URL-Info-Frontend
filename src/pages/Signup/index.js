import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Signup = () => {
  return (
    <section className="signup-section">
      <div className="wrap signup-wrap">
        <h3 className="signup-thirdHeader">Sign Up Now</h3>
        <form className="signup-form">
          <input
            type="text"
            className="signup-form-input"
            placeholder="Enter your name"
          />
          <input
            type="text"
            className="signup-form-input"
            placeholder="Enter your email"
          />
          <input
            type="text"
            className="signup-form-input"
            placeholder="Enter your password"
          />
          <p className="signup-form-info">
            By creating an account, you agree to the privacy policy and <span>terms of
            service. </span>
          </p>
          <button className="btn-cta signup-form-cta">Sign up</button>
          <p className="signup-form-info">
            Already have an account? <Link path="/login">Login</Link>{" "}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
