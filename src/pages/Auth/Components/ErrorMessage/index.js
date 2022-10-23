import React from "react";
import "./style.css";

const ErrorMessage = ({error}) => {
  return (
    <div className="errorMessage-sec">
      <p className="errorMessage">{error}</p>
    </div>
  );
};

export default ErrorMessage;
