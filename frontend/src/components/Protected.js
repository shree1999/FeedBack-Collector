import { useSelector } from "react-redux";
import { Route } from "react-router";

import { LoadingCount } from "./LoadingCount";

export const Protected = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  const { data } = auth;

  return data && data._id ? <Route {...rest} /> : <LoadingCount />;
};
