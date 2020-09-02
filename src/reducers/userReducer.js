const initialState = {
  username: ""
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case "GET_RANDOM_USER_DATA_SUCCESS":
    case "SET_USER":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
