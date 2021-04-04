import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import formFields from './FormContent';
import { sendSurvey } from '../../redux/actions/survey.action';

const SurveyFormReview = ({ onCancelHandler }) => {
  const dispatch = useDispatch();

  const { form } = useSelector(state => ({ ...state }));
  const formValues = form.surveyForm.values;

  const reviewField = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name} className="form-group">
        <label>{label}</label>
        <div className="form-control">{formValues[name]}</div>
      </div>
    );
  });

  const onClickHandler = () => {
    dispatch(sendSurvey(formValues));
  };

  return (
    <div className="container">
      <h5>Please confirm your entries</h5>
      {reviewField}
      <button className="btn btn-warning" onClick={onCancelHandler}>
        Back
      </button>
      <button
        className="btn btn-primary btn-raised float-right"
        onClick={onClickHandler}
      >
        Send Survey
      </button>
    </div>
  );
};

export default SurveyFormReview;
