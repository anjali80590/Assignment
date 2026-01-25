 Features & Functional Requirements
Flashcard Management
The app consists of flashcards, each containing a question on one side and an answer on the other.
Users can flip a flashcard to see the answer.
Each flashcard has Next and Previous buttons for navigation.
Attempts & Answer Validation
Users can guess the answer before flipping the card.
After flipping, they can mark their guess as correct or incorrect.
A progress tracker shows the number of correct and incorrect responses.
Study Session Timer & Auto-Save
A session timer (e.g., 10 minutes) runs while studying.
The timer should be visible on the UI and update in real time.
When the timer expires, a summary screen appears, showing:
Total cards studied
Correct vs incorrect answers count
Unanswered cards count
Local Storage Persistence
Progress is stored in local storage to prevent loss on refresh.
Stored data includes:
Current flashcard index (resume from where the user left off).
User’s progress (correct vs incorrect answers count).
Number of unattempted flashcards.
Timer state (resumes after refresh).
Session Completion & Summary
When the session ends (either by completing all flashcards or timer expiry), show:
Final progress report
Number of correct vs incorrect guesses
Flashcards left unattempted
📌 Updated Flashcard Data Structure
const flashcards = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is 5 + 7?",
    answer: "12",
  },
  {
    id: 3,
    question: "Who wrote 'To Kill a Mockingbird'?",
    answer: "Harper Lee",
  },
  {
    id: 4,
    question: "What is the chemical symbol for water?",
    answer: "H2O",
  },
  {
    id: 5,
    question: "What is the speed of light in a vacuum?",
    answer: "299,792,458 meters per second",
  }
];

📌 Local Storage Keys
const localStorageKeys = {
  CORRECT_ANSWERS: "flashcardCorrectAnswers", // Correct answers count
  INCORRECT_ANSWERS: "flashcardIncorrectAnswers", // Incorrect answers count
  UNATTEMPTED_CARDS: "unattemptedFlashcards", // Tracks skipped flashcards
  CURRENT_CARD_INDEX: "currentFlashcardIndex", // Keeps track of last studied flashcard
  TIMER: "studySessionTimer", // Stores remaining session time
};
