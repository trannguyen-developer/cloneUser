import { combineReducers } from "redux";
import reducerData from "./reducerData";
import reducerLogin from "./reducerLogin";

const rootReducer = combineReducers({
  data: reducerData,
  login: reducerLogin,
});

export default rootReducer;
