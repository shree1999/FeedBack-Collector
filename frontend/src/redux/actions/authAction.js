import axios from "axios";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
} from "../constants";

export const checkUserLogin = () => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  const { data } = await axios.get("/api/google/me");
  if (data.success) {
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
  } else {
    dispatch({ type: USER_LOGIN_FAIL, payload: data.message });
  }
};
