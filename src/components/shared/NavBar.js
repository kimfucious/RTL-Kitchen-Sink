/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import sink from "../../images/sink_32.png";
import { useDispatch } from "react-redux";
import { signOut } from "../../actions.js";

export const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark animate__animated animate__fadeIn">
      <div className="container">
        <a className="d-flex align-items-center navbar-brand" href="#">
          <span
            className="mr-2"
            role="img"
            aria-label="Octopus"
            style={{ fontSize: 32 }}
          >
            🐙
          </span>
          +
          <img className="ml-3" src={sink} width="32" height="32" alt="brand" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li> */}
            {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li> */}
          </ul>
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            onClick={async () => {
              try {
                dispatch(signOut());
              } catch (error) {
                console.error(error);
              }
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};
