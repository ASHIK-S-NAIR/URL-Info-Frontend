import React from 'react'
import Header from './components/Header';
import InsightsTable from './components/InsightsTable';
import "./style.css";

const Home = () => {
  return (
    <section className="home-section">
        <Header />
        <InsightsTable />
    </section>
  )
}

export default Home