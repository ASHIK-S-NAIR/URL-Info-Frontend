import React from 'react'

const Home = () => {
  return (
    <section className="home-section">
      <div className="wrap home-wrap">
        <h1 className="home-header">Supercharge your Content Marketing</h1>
        <h3 className="home-subheader">We've built a simple growth marketing suite so you can improve <br /> website traffic with valuable insights and guidance.</h3>
        <div className="home-url-sec">
          <form className="home-url-form">
            <input type="text" className="home-url-form-input" placeholder='Put your website URL here. Eg.www.growth.cx' />
            <button className="btn-cta home-cta-getInsights">Get insights</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Home