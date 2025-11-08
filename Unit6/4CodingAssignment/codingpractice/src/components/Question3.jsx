import React, { useState, useEffect, useRef } from "react";

const questions = [
  {
    question: "What is React?",
    options: ["A library", "A framework", "A language", "A database"],
    correctAnswer: 0,
  },
  {
    question: "Which hook is used for side effects?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: 1,
  },
  {
    question: "JSX stands for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extension",
      "Java XML",
    ],
    correctAnswer: 0,
  },
  {
    question: "React components must return?",
    options: ["String", "Number", "Single JSX element", "Array"],
    correctAnswer: 2,
  },
  {
    question: "What is virtual DOM?",
    options: [
      "Real DOM",
      "In-memory representation",
      "Browser API",
      "React component",
    ],
    correctAnswer: 1,
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [history, setHistory] = useState([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const timerRef = useRef(null);

  useEffect(() => {
    if (timeLeft > 0 && !answerStatus && !quizFinished) {
      timerRef.current = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !answerStatus) {
      handleTimeout();
    }

    return () => clearTimeout(timerRef.current);
  }, [timeLeft, answerStatus, quizFinished]);

  useEffect(() => {
    setQuestionStartTime(Date.now());
    setTimeLeft(15);
    setSelectedAnswer(null);
    setAnswerStatus(null);
  }, [currentQuestion]);

  const handleAnswer = (answerIndex) => {
    if (answerStatus) return;

    const timeTaken = (Date.now() - questionStartTime) / 1000;
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;

    setSelectedAnswer(answerIndex);
    setAnswerStatus(isCorrect ? "correct" : "wrong");

    if (isCorrect) {
      setScore(score + 1);
    }

    setHistory((prev) => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        selected: answerIndex,
        correct: questions[currentQuestion].correctAnswer,
        status: isCorrect ? "correct" : "wrong",
        time: timeTaken,
      },
    ]);

    setTimeout(nextQuestion, 2000);
  };

  const handleTimeout = () => {
    const timeTaken = 15;
    setScore(score - 1);
    setAnswerStatus("timeout");

    setHistory((prev) => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        selected: null,
        correct: questions[currentQuestion].correctAnswer,
        status: "timeout",
        time: timeTaken,
      },
    ]);

    setTimeout(nextQuestion, 2000);
  };

  const skipQuestion = () => {
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    setScore(score - 1);
    setAnswerStatus("skipped");

    setHistory((prev) => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        selected: null,
        correct: questions[currentQuestion].correctAnswer,
        status: "skipped",
        time: timeTaken,
      },
    ]);

    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 >= questions.length) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setHistory([]);
    setTimeLeft(15);
    setSelectedAnswer(null);
    setAnswerStatus(null);
  };

  const getLongestTimeQuestion = () => {
    if (history.length === 0) return null;
    return history.reduce((longest, item) =>
      item.time > longest.time ? item : longest
    );
  };

  const longestTimeQuestion = getLongestTimeQuestion();

  if (quizFinished) {
    const correct = history.filter((item) => item.status === "correct").length;
    const wrong = history.filter((item) => item.status === "wrong").length;
    const skipped = history.filter(
      (item) => item.status === "skipped" || item.status === "timeout"
    ).length;

    return (
      <div>
        <h2>Quiz Finished!</h2>
        <p>Total Score: {score}</p>
        <p>Correct: {correct}</p>
        <p>Wrong: {wrong}</p>
        <p>Skipped/Timeout: {skipped}</p>
        <button onClick={restartQuiz}>Restart Quiz</button>

        <h3>History:</h3>
        {history.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                longestTimeQuestion && item.time === longestTimeQuestion.time
                  ? "#ffffcc"
                  : "transparent",
            }}
          >
            <p>Q: {item.question}</p>
            <p>
              Your answer:{" "}
              {item.selected !== null
                ? questions[index].options[item.selected]
                : "None"}
            </p>
            <p>
              Status: {item.status} | Time: {item.time}s
            </p>
          </div>
        ))}
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div>
      <div>
        <div>Time Left: {timeLeft}s</div>
        <div>Score: {score}</div>
        <div>
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div style={{ width: "100%", backgroundColor: "#ddd" }}>
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: "blue",
              height: "20px",
            }}
          ></div>
        </div>
      </div>

      <div>
        <h3>{questions[currentQuestion].question}</h3>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={answerStatus}
            style={{
              backgroundColor:
                answerStatus &&
                index === questions[currentQuestion].correctAnswer
                  ? "green"
                  : answerStatus && index === selectedAnswer && !answerStatus
                  ? "red"
                  : "transparent",
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {answerStatus && (
        <p>
          {answerStatus === "correct"
            ? "Correct!"
            : answerStatus === "wrong"
            ? "Wrong!"
            : "Skipped!"}
        </p>
      )}

      <button onClick={skipQuestion} disabled={answerStatus}>
        Skip Question (-1 point)
      </button>
    </div>
  );
};

export default QuizApp;
