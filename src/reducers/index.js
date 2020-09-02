import { combineReducers } from "redux";
import auth from "./authReducer";
import user from "./userReducer";

export const appReducer = combineReducers({
  auth,
  user
});

export const rootReducer = (state, action) => {
  if (action.type === "SIGN_OUT_SUCCESS") {
    console.log("🧹 Clearing Store on Sign Out");
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
