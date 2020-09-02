import React from "react";
import { render, cleanup, fireEvent, waitFor } from "../utils/test-utils";
import { NotFound } from "../pages/NotFound";
import { createMemoryHistory } from "history";
import { App } from "../pages/App";

// const handleSignIn = jest.fn();

afterEach(cleanup);

describe("<NotFound/>", () => {
  test("renders", () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });

  test.skip("renders", () => {
    const history = createMemoryHistory();
    history.push("/abc");
    const { getByTestId } = render(<App />);
  });
});
