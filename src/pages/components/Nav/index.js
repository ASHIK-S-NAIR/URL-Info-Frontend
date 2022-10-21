import React from 'react'
import "../../../App.css";
import "./style.css";

const Nav = () => {
  return (
    <nav className="nav-section">
        <div className="wrap nav-wrap">
            <div className="nav-logo">
                <h1 className="nav-logo-h1">SuiteJar</h1>
            </div>
            <div className="nav-cta-section">
                <button className="btn-cta btn-cta-outline nav-cta-login">Login</button>
                <button className="btn-cta nav-cta-signup">Sign up - <span>its free</span></button>
            </div>
        </div>
    </nav>
  )
}

export default Nav