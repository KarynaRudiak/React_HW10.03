import { Provider, useDispatch, useSelector } from 'react-redux';
import { submitAnswers } from './features/questionnaire/questionnaireSlice.js';
import Question from './components/Question';
import Result from './components/Result';
import store from './features/store';

function App() {
  const dispatch = useDispatch();
  const { questions, result } = useSelector((state) => state.questionnaire);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <Provider store={store}>
      <div>
        <h1>Questionnaire</h1>
        {questions.map((question) => (
          <Question key={question.id} question={question} isSubmitted={result !== null} />
        ))}
        <button onClick={handleSubmit}>Submit Answers</button>
        <Result />
      </div>
    </Provider>
  );
}

export default App;
