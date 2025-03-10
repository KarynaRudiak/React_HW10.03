import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice.js';

function Question({ question, isSubmitted }) {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedOption(answer);
    dispatch(answerQuestion({ questionId: question.id, answer }));
  };

  useEffect(() => {
    if (isSubmitted) {
      setSelectedOption(null);
    }
  }, [isSubmitted]);

  return (
    <div>
      <h2>{question.text}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
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
