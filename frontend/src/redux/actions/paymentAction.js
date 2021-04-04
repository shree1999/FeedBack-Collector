import axios from "axios";
import { USER_LOGIN_SUCCESS } from "../constants";

export const handlePayment = (token) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/stripe", { token });

    console.log(data);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
  } catch (err) {
    console.error(err);
  }
};
