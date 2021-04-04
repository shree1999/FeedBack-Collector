import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { SurveyFormField } from './SurveyFormField';
import formContent from './FormContent';
import validateEmails from '../../utils/validateEmail';

const SurveyForm = ({ handleSubmit, onSubmitHandler }) => {
  const displayFormFields = () => {
    return _.map(formContent, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyFormField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {displayFormFields()}
        <Link className="btn btn-warning" to="/surveys">
          Cancel
        </Link>
        <button
          className="btn btn-primary btn-raised float-right"
          type="submit"
        >
          Next{` ->`}
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};
  console.log(values);
  errors.recipients = validateEmails(values.recipients || '');
  _.each(formContent, ({ name }) => {
    if (!values[name]) {
      //using the name to iterate over the destructed object {name} from the formFields array
      errors[name] = `${name} is required`;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
