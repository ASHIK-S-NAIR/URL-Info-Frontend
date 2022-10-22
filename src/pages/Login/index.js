import React from "react";
import "./style.css";

const Login = () => {
  return (
    <section className="login-section">
      <div className="wrap login-wrap">
        <h3 className="login-thirdHeader">Login Now</h3>
        <form className="login-form">
          <input
            type="text"
            className="login-form-input"
            placeholder="Enter your email"
          />
          <input
            type="text"
            className="login-form-input"
            placeholder="Enter your password"
          />
          <button className="btn-cta login-form-cta">Sign in</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
