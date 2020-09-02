import React from "react";
import { useHistory } from "react-router-dom";

export const NotFound = () => {
  const history = useHistory();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center w-100 vh-100 text-light">
      <div className="display-3 mb-3">
        <span role="img" aria-label="Ghost emoji">
          👻
        </span>
      </div>
      <p className="lead">You still haven't found what you're looking for...</p>
      <button
        className="btn btn-primary mt-2"
        onClick={() => history.replace("/")}
      >
        Back
      </button>
    </div>
  );
};
