import React from "react";
import "./style.css";

const ErrorMessage = ({error}) => {
  return (
    // ErrorMessage section starts
    <div className="errorMessage-sec">
      <p className="errorMessage">{error}</p>
    </div>
    // ErrorMessage section ends

  );
};

export default ErrorMessage;
