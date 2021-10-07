import axios from "axios";
import store from "../store.js";
import { LOGIN, SAVE_TOKEN } from "../constants";

const reducerLogin = (state = "", action) => {
  switch (action.type) {
    case LOGIN:
      axios
        .post(`https://testapi.io/api/vuongtaquoc/login`, {
          email: action.payload.email,
          password: action.payload.password,
        })
        .then((data) => {
          store.dispatch({ type: "SAVE_TOKEN", token: data.data.token });
        })
        .catch((err) => console.log(err));
      return state;
    case SAVE_TOKEN:
      return action.token;
    default:
      return state;
  }
};

export default reducerLogin;
