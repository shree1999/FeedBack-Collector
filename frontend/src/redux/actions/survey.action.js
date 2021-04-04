import axios from 'axios';

import { USER_LOGIN_SUCCESS } from '../constants';

export const sendSurvey = values => async dispatch => {
  try {
    const res = await axios.post('/api/surveys', values);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.user });
  } catch (err) {
    console.error(err.response.data.message);
  }
};
