import { isAuthenticated } from "api/auth";
import { getAllInsights } from "api/insigt";
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
  const [insightsArray, setInsightsArray] = useState({
    insights: [],
    error: "",
    loading: "",
    success: false,
  });

  const { user, token } = isAuthenticated();

  const loadInsights = async () => {
    try {
      const data = await getAllInsights(token, user._id);
      if (data.status === "error") {
        return setInsightsArray({
          ...insightsArray,
          loading: "",
          success: false,
          error: data.error,
        });
      }
      
      return setInsightsArray({
        ...insightsArray,
        insights: data,
        loading: "",
        success: true,
        error: "",
      });
    } catch (error) {
      return setInsightsArray({
        ...insightsArray,
        loading: "",
        success: false,
        error: error.message,
      });
    }
  };

  return (
    <section className="home-section">
      <Header
        urlValues={urlValues}
        setUrlValues={setUrlValues}
        loadInsights={loadInsights}
      />
      {isAuthenticated() && (
        <InsightsTable
          insightsArray={insightsArray}
          setInsightsArray={setInsightsArray}
          loadInsights={loadInsights}
        />
      )}
    </section>
  );
};

export default Home;
