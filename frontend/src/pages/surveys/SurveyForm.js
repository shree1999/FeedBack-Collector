import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import { SurveyFormField } from './SurveyFormField';
import formContent from './FormContent';

const SurveyForm = ({ handleSubmit }) => {
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
      <form onSubmit={handleSubmit(values => console.log(values))}>
        {displayFormFields()}
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
