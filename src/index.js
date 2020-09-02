import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import * as serviceWorker from "./serviceWorker";

import "./styles/custom.scss";
import "animate.css";
import "bootstrap/dist/js/bootstrap.bundle";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
