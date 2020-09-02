import React from "react";
import { render, cleanup, fireEvent, waitFor } from "../utils/test-utils";
import { SignIn } from "../pages/SignIn";

// const handleSignIn = jest.fn();

const stateGeorge = {
  auth: { userId: "1234567890" },
  user: { username: "george" }
};

afterEach(cleanup);

describe("<SignIn/>", () => {
  test("renders", () => {
    const { asFragment } = render(<SignIn />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders App when state is present", () => {
    const { getByTestId } = render(<SignIn />, { initialState: stateGeorge });
    const appPage = getByTestId("app-page");
    expect(appPage).toBeInTheDocument();
  });

  test("Captures username input field changes", () => {
    const { getByLabelText } = render(<SignIn />);
    const userInput = getByLabelText(/Username/);
    fireEvent.change(userInput, { target: { value: "george" } });
    expect(userInput.value).toEqual("george");
  });

  test("Error message renders when no username", async () => {
    const { getByText } = render(<SignIn />);
    fireEvent.click(getByText(/Sign In/));
    await waitFor(() =>
      expect(getByText(/Please enter a username/)).toBeInTheDocument()
    );
  });

  test("Error message renders username too short", async () => {
    const { getByText, getByLabelText } = render(<SignIn />);
    const userInput = getByLabelText(/Username/);
    fireEvent.change(userInput, { target: { value: "g" } });
    fireEvent.click(getByText(/Sign In/));
    await waitFor(() =>
      expect(getByText(/Two characters minimum, please/)).toBeInTheDocument()
    );
  });

  test.skip("should render App after submit and resultant dispatched state update", async () => {
    // not sure what I'm doing here.
    const { getByText, getByLabelText } = render(<SignIn />);
    const userInput = getByLabelText(/Username/);
    fireEvent.change(userInput, { target: { value: "george" } });
    fireEvent.click(getByText(/Sign In/));
    await waitFor(() => expect(getByText(/George/)).toBeInTheDocument());
  });

  test.skip("handleSignIn() is called on submit", async () => {
    const handleSignIn = jest.fn();
    const { getByText, getByLabelText } = render(<SignIn />);
    const userInput = getByLabelText(/Username/);
    fireEvent.change(userInput, { target: { value: "george" } });
    fireEvent.click(getByText(/Sign In/));
    expect(handleSignIn).toHaveBeenCalledTimes(1);
    // doing something wrong here.
    // always shows 0, but above test prove it's getting called.
  });
});
