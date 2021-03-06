# 🐙 React Testing Library Kitchen Sink ![sink](./src/images/sink_32.png)

This repo serves to demonstrate how to test a React app with the following libraries:

- Redux (with hooks)
- React Router

I've created a simple app here, but I'm trying to include many of the real-world scenarios that are used in production apps as simply as possible.

## Why am I doing this?

RTL doesn't work out of the box when using these libraries, so there's some work to be done to get the tests working.

If you're seeing errors/warnings like the below, you'll need to do a little work to get your tests running:

```console
could not find react-redux context value; please ensure the component is wrapped in a <Provider>
```

```console
TypeError: dispatch is not a function
```

My hope is to learn the best way to test using RTL in these combined scenarios and hopefully help others who are trying to do so as well.

## 🎁 Wrappers

The use of wrappers will get tests running and greatly reduces having to retype a lot of boilerplate testing code.

In order to get Redux to work there's [this](https://testing-library.com/docs/example-react-redux).

And in order to get React Router to work there's [this](https://testing-library.com/docs/example-react-router).

These can be combined to get them both working together with RTL. The following code is from `utils/test-utils.js` located in the `src` dir of this repo.

```js
import React from "react";
import { AppRouter } from "../routers/AppRouter";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import configureStore from "../store/configureStore";

const render = (
  ui,
  {
    initialState = { auth: { userId: "", user: { username: "" } } }, // your state will vary
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

### Redux

One thing this allows you to do is to set Redux state for any given test. For example:

```js
test("renders App when userId in state is present", () => {
  const stateGeorge = {
    auth: { userId: "1234567890" },
    user: { username: "george" }
  };

  const { getByTestId } = render(<App />, { initialState: stateGeorge });
  const appPage = getByTestId("app-page");
  expect(appPage).toBeInTheDocument();
});
```

In the above, state is passed as the second argument to the **wrapped** render function.

### React Router

Another thing this allows you to do is test Navigation. For example:

```js
test("renders Another page", () => {
  const stateGeorge = {
    auth: { userId: "1234567890" },
    user: { username: "george" }
  };

  const { getByText, getByTestId } = render(<App />, {
    initialState: stateGeorge
  });
  fireEvent.click(getByText(/another page/i));
  expect(getByTestId("another-page")).toBeInTheDocument();
});
```

In the above, the initial Redux state is set. And then, we fire a click event on a React Router `Link` element (in `</NavBar>`), which allows us to test if naviation is working properly.

As this app is using `protected routes`, state will determine which page is ultimately rendered, depending on the presense of `auth: {userId}`.

## Notes

- RTL needs to be at a min of v.10.x to use `waitFor`: `"@testing-library/react": "^10.4.9"`
- `package.json` needs `"test": "react-scripts test --env=jsdom-fourteen"` to address [this issue](https://github.com/testing-library/react-testing-library/issues/662)
