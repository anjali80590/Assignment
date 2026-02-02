import React, { useEffect, useState } from "react";
import Summary from "./components/Summary";
import Flashcard from "./components/Flashcard";
import flashcards from './components/data'
const SESSION_TIME = 60;
const localStorageKeys = {
  CORRECT_ANSWERS: "flashcardCorrectAnswers", // Correct answers count
  INCORRECT_ANSWERS: "flashcardIncorrectAnswers", // Incorrect answers count
  UNATTEMPTED_CARDS: "unattemptedFlashcards", // Tracks skipped flashcards
  CURRENT_CARD_INDEX: "currentFlashcardIndex", // Keeps track of last studied flashcard
  TIMER: "studySessionTimer", // Stores remaining session time
};
function App() {
  let savedIndex=Number(localStorage.getItem(localStorageKeys.CURRENT_CARD_INDEX));
  if(isNaN(savedIndex))savedIndex=0;
  let [currentCard, setCurrentCard] = useState(
   savedIndex
  );
  let [rightCount, setRightCount] = useState(
    Number(localStorage.getItem(localStorageKeys.CORRECT_ANSWERS)) || 0,
  );
  let [wrongCount, setWrongCount] = useState(
    Number(localStorage.getItem(localStorageKeys.INCORRECT_ANSWERS)) || 0,
  );
  let savedTimer=Number(localStorage.getItem(localStorageKeys.TIMER));
  let [remainingTime, setRemaningTime] = useState(
    savedTimer>0?savedTimer:SESSION_TIME
  );
  let [isSessionOver, setIsSessionOver] = useState(false);

  useEffect(() => {
    if (remainingTime <= 0) {
      setIsSessionOver(true);
      return;
    }
    let intervalId = setInterval(() => {
      setRemaningTime((prevTime) => {
     let updatedTimer=prevTime-1;
     localStorage.setItem(localStorageKeys.TIMER,updatedTimer);
     return updatedTimer;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [remainingTime]);

  useEffect(() => {
    localStorage.setItem(localStorageKeys.CURRENT_CARD_INDEX, currentCard);
    localStorage.setItem(localStorageKeys.CORRECT_ANSWERS, rightCount);
    localStorage.setItem(localStorageKeys.INCORRECT_ANSWERS, wrongCount);
  }, [currentCard, rightCount, wrongCount]);

  let handleUserResponse = (isRight) => {
    if (isRight) {
      setRightCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }
    if (currentCard + 1 == flashcards.length) {
      setIsSessionOver(true);
    } else {
      setCurrentCard((prev) => prev + 1);
    }
  };
  console.log(wrongCount);
  console.log(rightCount);
  console.log(flashcards.length);
 console.log('remaning Timer',remainingTime);
  if (isSessionOver) {
    return (
      <Summary
        total={flashcards.length}
        correct={rightCount}
        incorrect={wrongCount}
        unattempted={flashcards.length - (rightCount + wrongCount)}
      />
    );
  }
  console.log("Sessionover",isSessionOver)
  console.log("currentcard",currentCard);
  console.log("lfashbard",flashcards[currentCard]);
  return (
    <div className="app">
      <h2>Flashcard Learning App</h2>
      <p className="timer">Timer Left:{remainingTime}</p>
      {flashcards[currentCard] ? ( <Flashcard card={flashcards[currentCard]} onAnswer={handleUserResponse} />):(<p>No flashCards Avaible</p>)}
    </div>
  );
}
export default App;

