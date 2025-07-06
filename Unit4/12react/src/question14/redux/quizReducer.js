import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  ANSWER_QUESTION,
  SKIP_QUESTION,
} from "./actionTypes";

const initialState = {
  loading: false,
  error: null,
  questions: [],
  currentIndex: 0,
  score: 0,
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, loading: false, questions: action.payload };
    case FETCH_QUESTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ANSWER_QUESTION:
      return {
        ...state,
        score: action.payload.correct ? state.score + 1 : state.score,
        currentIndex: state.currentIndex + 1,
      };
    case SKIP_QUESTION:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    default:
      return state;
  }
}
