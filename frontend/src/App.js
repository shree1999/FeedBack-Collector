import { Fragment, useEffect } from 'react';
import { Navbar } from './components/Header/Navbar';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Homepage } from './pages/home/Homepage';
import { checkUserLogin } from './redux/actions/authAction';
import { Dashboard } from './pages/surveys/Dashboard';
import { CreateSurvey } from './pages/surveys/CreateSurvey';
import { Protected } from './components/Protected';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserLogin());
  });

  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route component={Homepage} path="/" exact />
        <Protected component={Dashboard} path="/surveys" exact />
        <Protected component={CreateSurvey} path="/surveys/new" />
      </Switch>
    </Fragment>
  );
};
