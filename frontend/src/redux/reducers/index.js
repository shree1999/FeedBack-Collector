import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import { authReducerFuction } from './authReducer';

export const rootReducers = combineReducers({
  auth: authReducerFuction,
  form: reduxForm,
});
