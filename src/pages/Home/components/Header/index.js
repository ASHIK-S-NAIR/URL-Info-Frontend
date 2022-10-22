import React from 'react';
import "./style.css";

const Header = () => {
  return (
    <section className="header-section">
    <div className="wrap header-wrap">
        <h1 className="header-header">Supercharge your Content Marketing</h1>
        <h3 className="header-subheader">We've built a simple <span>growth marketing suite</span> so you can improve <br /> website traffic with valuable insights and guidance.</h3>
        <div className="header-url-sec">
          <form className="header-url-form">
            <input type="text" className="header-url-form-input" placeholder='Put your website URL here. Eg.www.growth.cx' />
            <button className="btn-cta header-cta-getInsights">Get insights</button>
          </form>
        </div>
        <ul className="header-features-ul">
          <li className="header-features-li">It's 100% Free!</li>
          <li className="header-features-li">No credit card required</li>
        </ul>
      </div>
    </section>
  )
}

export default Header