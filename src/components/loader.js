import React from "react";
import "../styles/loader.css";

/**
 *
 * @returns {JSX.Element} loader component
 */
const Loader = () => {
  return (
    <div className="loader-container" data-testid="loader">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
