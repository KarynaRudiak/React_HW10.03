import { useSelector } from 'react-redux';

function Result() {
  const result = useSelector((state) => state.questionnaire.result);

  if (!result) {
    return <p>No answers submitted yet.</p>; 
  }

  return (
    <div>
      <h2>Results</h2>
      <ul>
        {result.map((item, index) => (
          <li key={index}>
            <strong>{item.question}</strong>: {item.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
