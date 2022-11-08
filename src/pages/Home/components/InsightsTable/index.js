import { isAuthenticated } from "api/auth";
import { deleteAllInsights, deleteInsight, updateInsight } from "api/insigt";
import React, { useEffect } from "react";
import "./style.css";

const InsightsTable = ({ insightsArray, loadInsights }) => {
  const { user, token } = isAuthenticated();

  // onClickDeleteAllInsights - Function to call the deleteAllInsights API function
  const onClickDeleteAllInsights = async () => {
    const data = await deleteAllInsights(token, user._id);
    if (data.status === "error") {
      return console.log("Failed to delete all insights");
    }
    return loadInsights();
  };

  // onClickDeleteInsight- Function to call the deleteInsight API function
  const onClickDeleteInsight = async (insightId) => {
    const data = await deleteInsight(token, user._id, insightId);
    if (data.status === "error") {
      return console.log("Failed to delete insights");
    }
    return loadInsights();
  };

  // onClickAddToFav - Function to call the updateInsight API function
  const onClickAddToFav = async (insightId, favourite) => {
    const data = await updateInsight(token, user._id, insightId, favourite);
    if (data.status === "error") {
      return console.log("Failed to update insights");
    }
    return loadInsights();
  };

  useEffect(() => {
    loadInsights();
  }, []);

  return (
    // InsightsTable section starts
    <section className="insightsTable-section">
      <div className="wrap insightsTable-wrap">
        <h2 className="insightsTable-secondHeader">Insights Table</h2>
        <div className="insightsTable-cta-sec">
          <button
            className="btn-cta btn-cta-outline insightsTable-cta"
            onClick={onClickDeleteAllInsights}
          >
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
            {insightsArray.insights.length !== 0 &&
              insightsArray.insights.map((insightItem, index) => {
                return (
                  <tr key={index}>
                    <td className="insightsTable-table-body-value" >
                      <a
                        href={insightItem.domainName}
                        className="insightsTable-table-body-a"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {insightItem.domainName}
                      </a>
                    </td>
                    <td className="insightsTable-table-body-value">
                      {insightItem.wordCount}
                    </td>
                    <td className="insightsTable-table-body-value">
                      {insightItem.favourite === true ? "True" : "False"}
                    </td>
                    <td className="insightsTable-table-body-value">
                      <ol className="insightsTable-table-body-ul">
                        {insightItem.webLinks.map((webLinkItem, index) => {
                          return (
                            <li
                              key={index}
                              className="insightsTable-table-body-li"
                            >
                              <a
                                href={webLinkItem}
                                className="insightsTable-table-body-a"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {webLinkItem}
                              </a>
                            </li>
                          );
                        })}
                      </ol>
                    </td>
                    <td className="insightsTable-table-body-value">
                      <ol className="insightsTable-table-body-ul">
                        {insightItem.mediaLinks.map((mediaLinkItem, index) => {
                          return (
                            <li
                              key={index}
                              className="insightsTable-table-body-li"
                            >
                              <a
                                href={mediaLinkItem}
                                className="insightsTable-table-body-a"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {mediaLinkItem}
                              </a>
                            </li>
                          );
                        })}
                      </ol>
                    </td>
                    <td className="insightsTable-table-body-value">
                      <div className="insightsTable-table-body-cta-sec">
                        <button
                          className="btn-cta btn-cta-outline insightsTable-table-body-cta"
                          onClick={() => onClickDeleteInsight(insightItem._id)}
                        >
                          Remove
                        </button>
                        <button
                          className="btn-cta btn-cta-outline insightsTable-table-body-cta"
                          onClick={() =>
                            onClickAddToFav(
                              insightItem._id,
                              !insightItem.favourite
                            )
                          }
                        >
                          {insightItem.favourite === true
                            ? "Remove Fav"
                            : "Add Fav"}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="insightsTable-table-mob">
          {insightsArray.insights.length !== 0 &&
            insightsArray.insights.map((insightItem, index) => {
              return (
                <div className="insightsTable-table-item" key={index}>
                  <div className="insightsTable-table-item-sec">
                    <h3 className="insightsTable-table-item-head">
                      Domain Name
                    </h3>
                    <p className="insightsTable-table-item-value">
                      <a
                        href={insightItem.domainName}
                        className="insightsTable-table-item-a"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {insightItem.domainName}
                      </a>
                    </p>
                  </div>
                  <div className="insightsTable-table-item-sec">
                    <h3 className="insightsTable-table-item-head">Actions</h3>
                    <div className="insightsTable-table-item-cta-sec">
                      <button
                        className="btn-cta btn-cta-outline insightsTable-table-item-cta"
                        onClick={() => onClickDeleteInsight(insightItem._id)}
                      >
                        Remove
                      </button>
                      <button
                        className="btn-cta btn-cta-outline insightsTable-table-item-cta"
                        onClick={() =>
                          onClickAddToFav(
                            insightItem._id,
                            !insightItem.favourite
                          )
                        }
                      >
                        {insightItem.favourite === true
                          ? "Remove Fav"
                          : "Add Fav"}
                      </button>
                    </div>
                  </div>
                  <div className="insightsTable-table-item-sec">
                    <h3 className="insightsTable-table-item-head">
                      Word Count
                    </h3>
                    <p className="insightsTable-table-item-value">
                      {insightItem.wordCount}
                    </p>
                  </div>
                  <div className="insightsTable-table-item-sec">
                    <h3 className="insightsTable-table-item-head">Favourite</h3>
                    <p className="insightsTable-table-item-value">
                      {insightItem.favourite === true ? "True" : "False"}
                    </p>
                  </div>
                  <div className="insightsTable-table-item-sec">
                    <h3 className="insightsTable-table-item-head">Web Links</h3>
                    <ol className="insightsTable-table-item-ol">
                      {insightItem.webLinks.map((webLinkItem, index) => {
                        return (
                          <li
                            className="insightsTable-table-item-li"
                            key={index}
                          >
                            <a
                              href={webLinkItem}
                              className="insightsTable-table-item-a"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {webLinkItem}
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                  <div className="insightsTable-table-item-sec">
                    <h3 className="insightsTable-table-item-head">
                      Media Links
                    </h3>
                    <ol className="insightsTable-table-item-ol">
                      {insightItem.mediaLinks.map((mediaLinkItem, index) => {
                        return (
                          <li
                            className="insightsTable-table-item-li"
                            key={index}
                          >
                            <a
                              href={mediaLinkItem}
                              className="insightsTable-table-item-a"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {mediaLinkItem}
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
    // InsightsTable section ends
  );
};

export default InsightsTable;
