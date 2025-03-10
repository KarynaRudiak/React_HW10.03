import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice.js';

function Question({ question }) {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedOption(answer);
    dispatch(answerQuestion({ questionId: question.id, answer }));
  };

  return (
    <div>
      <h2>{question.text}</h2>
      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
          style={{
            backgroundColor: selectedOption === option ? 'lightgreen' : '',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
