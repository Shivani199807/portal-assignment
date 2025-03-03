import React from "react";
import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="loader-container" data-testid="loader">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
