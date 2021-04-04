import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants";

const initialState = {
  isLoading: false,
  error: null,
  data: {},
};

export const authReducerFuction = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { isLoading: true, data: {}, error: null };

    case USER_LOGIN_SUCCESS:
      return { data: action.payload, isLoading: false, error: null };

    case USER_LOGIN_FAIL:
      return { error: action.payload, isLoading: false, data: {} };

    default:
      return state;
  }
};
