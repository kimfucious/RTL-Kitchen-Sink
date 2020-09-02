import { v5 as uuid } from "uuid";
const NAMESPACE = "4009efab-5241-4432-9cff-57b04c6585f0";

export const signOut = () => async (dispatch) => {
  dispatch({ type: "SIGN_OUT_START" });
  try {
    dispatch({ type: "SIGN_OUT_SUCCESS" });
    return Promise.resolve;
  } catch (e) {
    dispatch({ type: "SIGN_OUT_FAIL", payload: e });
    return Promise.reject(e);
  }
};

export const signIn = (username) => async (dispatch) => {
  try {
    const userId = uuid(username, NAMESPACE);

    setTimeout(() => {
      dispatch({ type: "SIGN_IN", payload: { userId } });
      return Promise.resolve();
    }, 2000);
  } catch (error) {
    return Promise.reject(error);
  }
};
