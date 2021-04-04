import { combineReducers } from "redux";

import { authReducerFuction } from "./authReducer";

export const rootReducers = combineReducers({
  auth: authReducerFuction,
});
