import React from "react";
import { AppRouter } from "../routers/AppRouter";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import configureStore from "../store/configureStore";

const render = (
  ui,
  {
    initialState = { auth: { userId: "", user: { username: "" } } },
    store = configureStore(initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <AppRouter>{children}</AppRouter>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";

export { render };
