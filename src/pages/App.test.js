import React from "react";
import { cleanup, render } from "../utils/test-utils";
import { App } from "./App";

const stateGeorge = {
  auth: { userId: "1234567890" },
  user: { username: "george" }
};
afterEach(cleanup);

describe("App", () => {
  test("renders", () => {
    const { asFragment } = render(<App />, { initialState: stateGeorge });
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders SignIn when userId is blank", () => {
    const { getByText } = render(<App />);
    const signInButton = getByText(/Sign In/);
    expect(signInButton).toBeInTheDocument();
  });

  test("renders App when userId is present", () => {
    const { getByText } = render(<App />, { initialState: stateGeorge });
    const reverseButton = getByText(/Reverse Name/);
    expect(reverseButton).toBeInTheDocument();
  });

  test("renders captitalized username", () => {
    const { getByText } = render(<App />, { initialState: stateGeorge });
    const username = getByText(/George/);
    expect(username).toBeInTheDocument();
  });
});
