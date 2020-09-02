import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ children, ...rest }) => {
  const {
    auth: { userId }
  } = useSelector((state) => state);
  const isAuthenticated = !!userId;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
