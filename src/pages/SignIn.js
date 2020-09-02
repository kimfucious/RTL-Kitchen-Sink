import React, { useState } from "react";
import sink from "../images/sink.png";
import { useDispatch } from "react-redux";
import { Spinner } from "../components/shared/Spinner";
import { signIn } from "../actions.js/authActions";
import { setUser } from "../actions.js";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [fade, setFade] = useState("");
  const [isSpinning, setIsSpinning] = useState("");

  const handleChange = (name) => {
    setFade("animate__animated animate__fadeOut");
    setUsername(name);
  };

  const handleSignin = async (e) => {
    try {
      e.preventDefault();
      setFade("animate__animated animate__fadeOut");
      setIsSpinning(true);
      if (!username) {
        throw new Error("Please enter a username");
      }
      if (username.length < 2) {
        throw new Error("Two characters minimum, please");
      }
      if (username.includes(" ")) {
        throw new Error("No spaces, please");
      }
      await dispatch(signIn(username.trim()));
      await dispatch(setUser(username.trim()));
    } catch (error) {
      setIsSpinning(false);
      setFade("animate__animated animate__fadeIn");
      setError(error.message);
    }
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center w-100 vh-100 text-muted animate__animated animate__fadeIn"
      data-testid="sign-in-page"
    >
      <div className="d-flex align-items-center justify-content-center display-3 mb-3">
        <span role="img" aria-label="RTL Octopus Logo">
          🐙
        </span>
        +
        <span>
          <img
            className="ml-2"
            src={sink}
            alt="sink"
            style={{ height: 84, width: 84 }}
          />
        </span>
      </div>
      <form
        className="d-flex flex-column align-items-center "
        data-testid="sign-in-form"
        onSubmit={handleSignin}
      >
        <div className="form-group mt-3">
          <label className="text-primary" htmlFor="usernameInput">
            Username
          </label>

          <input
            id="usernameInput"
            type="text"
            className="form-control myInput"
            placeholder="George"
            onChange={(e) => handleChange(e.target.value)}
            value={username}
          />
        </div>
        <button
          className="d-flex align-items-center justify-content-center btn btn-outline-primary mt-3"
          disabled={isSpinning}
          type="submit"
          style={{ height: 38, width: 76 }}
        >
          {isSpinning ? (
            <div>
              <Spinner size={10} color="primary" type="beat" />
            </div>
          ) : (
            <span>Sign In</span>
          )}
        </button>
      </form>
      <div className={`mt-3 ${fade}`}>
        <p className={`text-warning`}>{error}</p>
      </div>
    </div>
  );
};
