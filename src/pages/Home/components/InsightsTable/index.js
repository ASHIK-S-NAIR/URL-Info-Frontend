import React from "react";
import "./style.css";

const InsightsTable = () => {
  return (
    <section className="insightsTable-section">
      <div className="wrap insightsTable-wrap">
        <h2 className="insightsTable-secondHeader">Insights Table</h2>
        <div className="insightsTable-cta-sec">
          <button className="btn-cta btn-cta-outline insightsTable-cta">
            Delete All Insights
          </button>
        </div>
        <table className="insightsTable-table">
          <thead className="insightsTable-table-thead">
            <tr>
              <th className="insightsTable-table-head-value">Domain Name</th>
              <th className="insightsTable-table-head-value">Word Count</th>
              <th className="insightsTable-table-head-value">Favourite</th>
              <th className="insightsTable-table-head-value">Web Links</th>
              <th className="insightsTable-table-head-value">Media Links</th>
              <th className="insightsTable-table-head-value">Actions</th>
            </tr>
          </thead>
          <tbody className="insightsTable-table-tbody">
            <tr>
              <td className="insightsTable-table-body-value">example.com</td>
              <td className="insightsTable-table-body-value">148</td>
              <td className="insightsTable-table-body-value">false</td>
              <td className="insightsTable-table-body-value">
                https://example-1.com,https://example-2.com,https://example-3.com,
              </td>
              <td className="insightsTable-table-body-value">
                https://example.com/image-name.png,https://example.com/image-name2.png
              </td>
              <td className="insightsTable-table-body-value">
                <button>Remove</button>
                <button>Add-to-Fav</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default InsightsTable;
