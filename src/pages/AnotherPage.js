import React from "react";
import { useHistory } from "react-router-dom";

export const AnotherPage = () => {
  const history = useHistory();
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center w-100 full-height-with-nav text-light animate__animated animate__fadeIn"
      data-testid="another-page"
    >
      <div className="display-3 mb-3">
        <span role="img" aria-label="Cherry Blossom">
          🌸
        </span>
      </div>
      <p className="lead">This is another page</p>
      <button
        className="btn btn-link text-primary mt-2"
        onClick={() => history.push("/")}
      >
        back
      </button>
    </div>
  );
};
