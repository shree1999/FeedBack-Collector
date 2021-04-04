import { useState } from 'react';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyReview';

export const CreateSurvey = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className="container">
      <h1 className="display-3">Create a New Survey</h1>
      {showReviewForm ? (
        <SurveyFormReview onCancelHandler={() => setShowReviewForm(false)} />
      ) : (
        <SurveyForm onSubmitHandler={() => setShowReviewForm(true)} />
      )}
    </div>
  );
};
