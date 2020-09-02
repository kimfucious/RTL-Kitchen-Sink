# 🐙 React Testing Library Kitchen Sink ![sink](./src/images/sink_32.png)

This repo serves to demonstrate how to test a React app with the following libraries:

- Redux (with hooks)
- React Router

## Wrappers

In order to get Redux to work there's [this:](https://testing-library.com/docs/example-react-redux).

And in order to get React Router to work there's [this:](https://testing-library.com/docs/example-react-router).

These can be combined like so, to get them both working together with RTL, at least in the way that this project is configured.

```js
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
```
