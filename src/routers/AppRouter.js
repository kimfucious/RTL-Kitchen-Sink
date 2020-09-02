import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnotherPage } from "../pages/AnotherPage";
import { App } from "../pages/App";
import { NavBar } from "../components/shared/NavBar";
import { NotFound } from "../pages/NotFound";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { SignIn } from "../pages/SignIn";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/home">
          <NavBar />
          <App />
        </PrivateRoute>
        <PrivateRoute path="/another">
          <NavBar />
          <AnotherPage />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
