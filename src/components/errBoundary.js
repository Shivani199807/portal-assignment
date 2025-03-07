import React from "react";
import PropTypes from "prop-types";
import "../styles/errorBoundary.css";

const ErrorBoundary = ({ error, children }) => {
  if (error) {
    return (
      <div className="error-container">
        <div className="error-box">
          <h1 className="error-title" data-testid="errorboundary">
            😞 Oops! Something went wrong.
          </h1>
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  return children;
};

ErrorBoundary.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
