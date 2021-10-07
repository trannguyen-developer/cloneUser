import axios from "axios";
import { token } from "../store.js";
import { DATA_USER, CREATE_USER, DELETE_USER, UPDATE_USER } from "../constants";

const reducerData = (state = [], action) => {
  switch (action.type) {
    case DATA_USER:
      return action.payload;
    case CREATE_USER:
      axios
        .post(
          "https://615d0d85c2981300177363dc.mockapi.io/n/user",
          {
            ...action.payload,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          window.location = "/";
        });
      break;
    case DELETE_USER:
      axios.delete(
        `https://615d0d85c2981300177363dc.mockapi.io/n/user/${action.idDelete}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const filter = state.filter((child) => child.id !== action.idDelete);
      return [...filter];

    case UPDATE_USER:
      axios.put(
        `https://615d0d85c2981300177363dc.mockapi.io/n/user/${action.idUpdate}`,
        {
          ...action.payload,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      state[action.slug] = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducerData;
