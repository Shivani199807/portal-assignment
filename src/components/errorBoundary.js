import React from "react";
import PropTypes from "prop-types";
import "../styles/errorBoundary.css"; // Importing external CSS
/**
 *
 * This component works as wrapper error handling component in application
 *
 * @param {Object} props //The component Props
 * @param {string} props.error // returns the error message
 * @param {React.ReactNode} props.children // returns the app component if no error
 * @returns {JSX.Element} //render the error component if error else the app component
 */
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

  return <>{children}</>;
};

ErrorBoundary.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
