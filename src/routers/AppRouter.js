import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { App } from "../pages/App";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { NavBar } from "../components/shared/NavBar";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";
// import NavBar from "../components/shared/NavBar";
// import Aloha from "../Aloha";

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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
