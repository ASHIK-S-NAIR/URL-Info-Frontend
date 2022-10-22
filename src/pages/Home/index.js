import React, { useState } from "react";
import Header from "./components/Header";
import InsightsTable from "./components/InsightsTable";
import "./style.css";

const Home = () => {
  const [urlValues, setUrlValues] = useState({
    url: "",
    error: "",
    loading: "",
    success: false,
  });
  const [insights, setInsights] = useState([]);

  return (
    <section className="home-section">
      <Header urlValues={urlValues} setUrlValues={setUrlValues} setInsights={setInsights} />
      <InsightsTable />
    </section>
  );
};

export default Home;
