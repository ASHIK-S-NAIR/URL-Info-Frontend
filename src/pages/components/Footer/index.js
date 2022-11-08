import React from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../../../assets/logo/logo-footer.svg";
import "./style.css";

const Footer = () => {
  return (
    // Footer section starts
    <section className="footer-section">
      <div className="wrap footer-wrap">
        <div className="footer-logo-sec">
          <Link to="/">
            <img className="footer-logo-img" src={LogoSvg} alt="SuiteJar" />
          </Link>
          <div className="footer-logo-info">
            <Link to="/">
              <h1 className="footer-logo-h1">OptEngine</h1>
            </Link>
          </div>
        </div>
        <h3 className="footer-h3">Enjoy your free SEO Tool</h3>
      </div>
    </section>
    // Footer section ends
  );
};

export default Footer;
