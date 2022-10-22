import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, authenticate } from "api/auth";

import "./style.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: "",
    success: false,
  });

  const { email, password, error, loading, success } = values;

  const navigate = useNavigate();

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setValues({ ...values, loading: "loading" });

    if (!(email && password)) {
      console.log("Please fill all the fields");
      return setValues({
        ...values,
        loading: "",
        success: false,
        error: "Fill all the fields",
      });
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      console.log("Please enter a valid email address");
      return setValues({
        ...values,
        loading: "",
        success: false,
        error: "Enter valid email",
      });
    }

    if (password.length < 5) {
      console.log("Password must have atleast 6 characters");
      return setValues({
        ...values,
        loading: "",
        success: false,
        error: "password must be at least 6 characters",
      });
    }

    try {
      const data = await login(email, password);

      if (data.status === "error") {
        return setValues({
          ...values,
          loading: "",
          success: false,
          error: data.error,
        });
      }
      authenticate(data);

      return navigate("/");
    } catch (error) {
      return setValues({
        ...values,
        loading: "",
        success: false,
        error: error.message,
      });
    }
  };

  const erroMessage = () => {
    return (
      <div className="login-errorMessage-sec">
        <p className="login-errorMessage">{error}</p>
      </div>
    );
  };
  return (
    <section className="login-section">
      <div className="wrap login-wrap">
        <h3 className="login-thirdHeader">Login Now</h3>
        {error && erroMessage()}
        <form className="login-form">
          <input
            type="email"
            className="login-form-input"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange("email")}
          />
          <input
            type="password"
            className="login-form-input"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange("password")}
          />
          <button className="btn-cta login-form-cta" onClick={onSubmit}>
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
