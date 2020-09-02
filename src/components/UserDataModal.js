import React from "react";
import { useSelector } from "react-redux";
import { getTitleCase } from "../helpers";

export const UserDataModal = () => {
  const {
    user: userData,
    user: { username }
  } = useSelector((state) => state);
  return (
    <div
      className="modal fade"
      id="userDataModal"
      tabIndex="-1"
      aria-labelledby="userDataModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="border border-primary modal-content">
          {userData.picture ? (
            <div className="d-flex flex-column align-items-center modal-body text-light">
              <img
                className="mt-3"
                src={userData.picture.medium}
                alt="avatar"
                style={{ borderRadius: "50%", height: 96, width: 96 }}
              />
              <p className="display-4 mt-3 mb-1" style={{ fontSize: 42 }}>
                {getTitleCase(userData.name.first)} {userData.name.last}
              </p>
              <p className="lead">
                {userData.location.state}, {userData.location.country}
              </p>
            </div>
          ) : null}
          <button
            type="button"
            className="btn btn-link text-primary my-3"
            data-dismiss="modal"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};
