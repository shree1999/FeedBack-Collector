import { reduxForm, Field } from 'redux-form';

const SurveyForm = ({ handleSubmit }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit(values => console.log(values))}>
        <Field
          type="text"
          name="surveyTitle"
          component="input"
          className="form-control"
        />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
