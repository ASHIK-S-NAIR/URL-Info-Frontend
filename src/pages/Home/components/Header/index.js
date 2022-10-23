import React from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "api/auth";
import { getInsightUrl } from "api/insigt";
import validUrl from "valid-url";
import "./style.css";
import ErrorMessage from "pages/components/ErrorMessage";

const Header = ({ urlValues, setUrlValues, loadInsights }) => {
  const { url, error, loading, success } = urlValues;

  const navigate = useNavigate();

  const { user, token } = isAuthenticated();

  // handleChange - Function to handle the change in input fields
  const handleChange = (name) => (event) => {
    setUrlValues({ ...urlValues, [name]: event.target.value });
  };

  // onSubmit - Function to send the entered url to the backend server
  const onSubmit = async (event) => {
    event.preventDefault();
    if (isAuthenticated()) {
      setUrlValues({ ...urlValues, loading: "loading" });

      if (!url) {
        return setUrlValues({
          ...urlValues,
          loading: "",
          success: false,
          error: "Fill in the URL field",
        });
      }
      if (!validUrl.isUri(url)) {
        return setUrlValues({
          ...urlValues,
          loading: "",
          success: false,
          error: "Enter a valid URL",
        });
      }

      try {
        var data = await getInsightUrl(token, user._id, url);

        if (data.status === "error") {
          return setUrlValues({
            ...urlValues,
            loading: "",
            success: false,
            error: data.error,
          });
        }

        return loadInsights();
      } catch (error) {
        return setUrlValues({
          ...urlValues,
          loading: "",
          success: false,
          error: error.message,
        });
      }
    } else {
      return navigate("/login");
    }
  };

  return (
    // Header section starts
    <section className="header-section">
      <div className="wrap header-wrap">
        <h1 className="header-header">Supercharge your Content Marketing</h1>
        <h3 className="header-subheader">
          We've built a simple <span>growth marketing suite</span> so you can
          improve <br /> website traffic with valuable insights and guidance.
        </h3>
        {error && <ErrorMessage error={error} />}
        <div className="header-url-sec">
          <form className="header-url-form">
            <input
              type="text"
              className="header-url-form-input"
              placeholder="Put your website URL here. Eg.www.growth.cx"
              value={url}
              onChange={handleChange("url")}
            />
            <button
              className="btn-cta header-cta-getInsights"
              onClick={onSubmit}
            >
              Get insights
            </button>
          </form>
        </div>
        <ul className="header-features-ul">
          <li className="header-features-li">It's 100% Free!</li>
          <li className="header-features-li">No credit card required</li>
        </ul>
      </div>
    </section>
    // Header section ends
  );
};

export default Header;
