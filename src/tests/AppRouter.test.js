import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  getByText
} from "../utils/test-utils";
import { AppRouter } from "../routers/AppRouter";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import { Router, Switch, Route } from "react-router-dom";
import { PublicRoute } from "../routers/PublicRoute";
import { App } from "../pages/App";
import { SignIn } from "../pages/SignIn";
import { PrivateRoute } from "../routers/PrivateRoute";
import { NavBar } from "../components/shared/NavBar";
import { AnotherPage } from "../pages/AnotherPage";
import { NotFound } from "../pages/NotFound";

const stateGeorge = {
  auth: { userId: "1234567890" },
  user: { username: "george" }
};
// afterEach(cleanup);

const store = configureStore(stateGeorge);

const Wrapper = () => {
  const history = createMemoryHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
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
    </Provider>
  );
};

describe("<AppRouter/>", () => {
  test.skip("renders App page", () => {
    const { getByTestId } = render(<App />, { initialState: stateGeorge });
    expect(getByTestId("app-page")).toBeInTheDocument();
  });

  test("renders Another page", () => {
    const { getByText, getByTestId } = render(<App />, {
      initialState: stateGeorge
    });
    fireEvent.click(getByText(/another page/i));
    expect(getByTestId("another-page")).toBeInTheDocument();
  });

  // this ain't workin yet'
  test.skip("bad route shows NotFound page", () => {
    const history = createMemoryHistory();
    history.push("/badroute");
    const { getByTestId } = render(<App />);
    // const { getByTestId } = render(
    //   <Provider store={store}>
    //     <AppRouter />
    //   </Provider>
    // );
    const notFoundPage = getByTestId("not-found-page");
    expect(notFoundPage).toBeInTheDocument();
  });
});
