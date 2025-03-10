import { useSelector } from 'react-redux';

function Result() {
  const result = useSelector((state) => state.questionnaire.result);

  if (!result) return null; 

  return (
    <div>
      <h3>Quiz Result</h3>
      <p>
        Your Score: {result.correctAnswersCount} / {result.totalQuestions}
      </p>
    </div>
  );
}

export default Result;
