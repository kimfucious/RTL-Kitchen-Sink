import React from "react";
import { cleanup, render, fireEvent, waitFor } from "../utils/test-utils";
import { App } from "./App";

const stateGeorge = {
  auth: { userId: "1234567890" },
  user: { username: "george" }
};
afterEach(cleanup);

describe("<App/>", () => {
  test("renders", () => {
    const { asFragment } = render(<App />, { initialState: stateGeorge });
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders SignIn when userId in state is blank", () => {
    const { getByTestId } = render(<App />);
    const signInPage = getByTestId("sign-in-page");
    expect(signInPage).toBeInTheDocument();
  });

  test("renders App when userId in state is present", () => {
    const { getByTestId } = render(<App />, { initialState: stateGeorge });
    const appPage = getByTestId("app-page");
    expect(appPage).toBeInTheDocument();
  });

  test("renders captitalized username when full state is present", () => {
    const { getByText } = render(<App />, { initialState: stateGeorge });
    const username = getByText(/George/);
    expect(username).toBeInTheDocument();
  });

  test("renders reversed captitalized username Reverse Name button is clicked", async () => {
    const { getByText } = render(<App />, { initialState: stateGeorge });
    fireEvent.click(getByText(/Reverse Name/));
    await waitFor(() =>
      expect(getByText(/Egroeg/)).toHaveTextContent("Egroeg")
    );
  });
});
