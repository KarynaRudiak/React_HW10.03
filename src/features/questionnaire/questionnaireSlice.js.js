import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    { id: 1, text: 'Question 1', options: ['Option 1', 'Option 2'], answer: null, correctAnswer: 'Option 1' },
    { id: 2, text: 'Question 2', options: ['Option 1', 'Option 2'], answer: null, correctAnswer: 'Option 2' },
    { id: 3, text: 'Question 3', options: ['Option 1', 'Option 2'], answer: null, correctAnswer: 'Option 1' },
  ],
  result: null,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.answer = answer;
      }
    },
    submitAnswers: (state) => {
      const correctAnswersCount = state.questions.filter(q => q.answer === q.correctAnswer).length;
      state.result = { correctAnswersCount, totalQuestions: state.questions.length };
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
