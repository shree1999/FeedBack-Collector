export const SurveyFormField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...input}
        style={{ marginBottom: '5px' }}
        className="form-control"
      />
      <div className="small text-danger" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
