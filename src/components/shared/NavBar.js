/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import sink from "../../images/sink_32.png";
import { useDispatch } from "react-redux";
import { signOut } from "../../actions.js";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
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
            <li
              className={`nav-item ${
                location.pathname === "/home" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/another" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/another">
                Another Page
              </Link>
            </li>
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
