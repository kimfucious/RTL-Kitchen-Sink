const initialState = {
  userId: ""
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
