import axios from "axios";

export const reverseUsername = (username) => async (dispatch) => {
  try {
    const reversed = username.toLowerCase().split("").reverse().join("");
    dispatch({ type: "SET_USER", payload: { username: reversed } });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const setUser = (username) => async (dispatch) => {
  try {
    dispatch({ type: "SET_USER", payload: { username } });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getRandomUserData = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_RANDOM_USER_DATA_START" });
    const { data: identityData } = await axios(
      `https://randomuser.me/api/?inc=name,location,picture`
    );
    const entry = identityData.results[0];
    console.warn(entry);
    dispatch({ type: "GET_RANDOM_USER_DATA_SUCCESS", payload: entry });
    return Promise.resolve(entry);
  } catch (error) {
    console.warn(error);
    dispatch({ type: "GET_RANDOM_USER_DATA_FAIL", payload: error });
    return Promise.reject(error);
  }
};
