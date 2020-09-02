import React, { useState } from "react";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { reverseUsername, getRandomUserData } from "../actions.js/userActions";
import { Spinner } from "../components/shared/Spinner";
import { UserDataModal } from "../components/UserDataModal";
import { getTitleCase } from "../helpers";

export const App = () => {
  const dispatch = useDispatch();
  const {
    user,
    user: { username }
  } = useSelector((state) => state);

  const [animation, setAnimation] = useState(false);
  const [error, setError] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const handleReverse = async () => {
    try {
      setError("");
      setIsSpinning("reversing");
      setAnimation("");
      await dispatch(
        reverseUsername(user.username, setIsSpinning, setAnimation)
      );
      setIsSpinning(false);
      setAnimation("animate__animated animate__tada");
    } catch (error) {
      setIsSpinning(false);
      setError(error.message);
    }
  };

  const handleGetUserData = async () => {
    try {
      setError("");
      setIsSpinning("fetching");
      await dispatch(getRandomUserData());
      setIsSpinning(false);
      $("#userDataModal").modal("show");
    } catch (error) {
      setIsSpinning(false);
      setError(error.message);
    }
  };

  return (
    <>
      <UserDataModal />
      <div
        className="d-flex flex-column align-items-center justify-content-center w-100 full-height-with-nav animate__animated animate__fadeIn"
        data-testid="app-page"
      >
        <span className="display-1" role="img" aria-label="desert island">
          🏝️
        </span>
        <div
          className={`d-flex justify-content-center display-3 text-center text-muted mt-3`}
        >
          <span>Aloha, </span>
          <span className={`d-flex ml-3 ${animation}`} data-testid="username">
            {getTitleCase(username)}
          </span>
          !
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
          <button
            className="d-flex align-items-center justify-content-center btn btn-outline-primary mr-2"
            disabled={isSpinning === "reversing"}
            onClick={() => handleReverse()}
            style={{ height: 38, width: 128 }}
          >
            {isSpinning === "reversing" ? (
              <div>
                <Spinner size={10} color="primary" type="beat" />
              </div>
            ) : (
              <span>Reverse Name</span>
            )}
          </button>
          <button
            className="d-flex align-items-center justify-content-center btn btn-outline-secondary ml-2"
            disabled={isSpinning === "fetching"}
            onClick={() => handleGetUserData()}
            style={{ height: 38, width: 128 }}
          >
            {isSpinning === "fetching" ? (
              <div>
                <Spinner size={10} color="secondary" type="beat" />
              </div>
            ) : (
              <span>Get New User</span>
            )}
          </button>
        </div>
        <div
          className={`mt-3 animate__animated animate__${
            error ? "fadeIn" : "fadeOut"
          }`}
        >
          <p className="text-warning">{error}</p>
        </div>
      </div>
    </>
  );
};
