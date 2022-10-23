import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, signup, authenticate } from "api/auth";
import "./style.css";
import ErrorMessage from "../Components/ErrorMessage";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: "",
    success: false,
  });

  const { name, email, password, error, loading, success } = values;

  const navigate = useNavigate();

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, loading: "loading" });

    if (!(name && email && password)) {
      return setValues({
        ...values,
        loading: "",
        success: false,
        error: "Fill all the fields",
      });
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return setValues({
        ...values,
        loading: "",
        success: false,
        error: "Enter valid email",
      });
    }

    if (password.length < 5) {
      return setValues({
        ...values,
        loading: "",
        success: false,
        error: "password must be at least 6 characters",
      });
    }

    try {
      var data = await signup(name, email, password);

      if (data.status === "error") {
        return setValues({
          ...values,
          loading: "",
          success: false,
          error: data.error,
        });
      }
      data = await login(email, password);
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

  return (
    <section className="signup-section">
      <div className="wrap signup-wrap">
        <h3 className="signup-thirdHeader">Sign Up Now</h3>
        {error && <ErrorMessage error={error} />}
        <form className="signup-form">
          <input
            type="text"
            className="signup-form-input"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange("name")}
          />
          <input
            type="email"
            className="signup-form-input"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange("email")}
          />
          <input
            type="password"
            className="signup-form-input"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange("password")}
          />
          <p className="signup-form-info">
            By creating an account, you agree to the privacy policy and{" "}
            <span>terms of service. </span>
          </p>
          <button className="btn-cta signup-form-cta" onClick={onSubmit}>
            Sign up
          </button>
          <p className="signup-form-info">
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
