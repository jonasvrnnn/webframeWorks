import React, { useState } from "react";
import type { QuizQuestion } from "./types";
import { getQuizData } from "./data";
import styles from "./simpleQuiz.module.css";

const Question = ({
  question,
  options,
  correctAnswer,
  finished,
}: QuizQuestion) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <form>
      <p>{question}</p>
      {options.map((e, i) => (
        <React.Fragment key={i}>
          <input
            id={`${question}-${i}`}
            name="same"
            disabled={finished}
            onChange={(event) => setSelectedOption(event.target.value)}
            value={e}
            type="radio"
          />
          <label
            htmlFor={`${question}-${i}`}
            className={
              e === correctAnswer && finished ? styles.correct : styles.default
            }
          >
            {e}
          </label>
          <br />
        </React.Fragment>
      ))}
    </form>
  );
};

const SimpleQuiz = () => {
  const [finished, setFinished] = useState(false);
  const quizData: QuizQuestion[] = getQuizData();
  return (
    <>
      {quizData.map((e, i) => (
        <Question
          key={i}
          question={e.question}
          options={e.options}
          correctAnswer={e.correctAnswer}
          finished={finished}
        />
      ))}
      <button onClick={(e) => setFinished(true)}>finished</button>
    </>
  );
};

function App() {
  return (
    <div>
      <SimpleQuiz />
    </div>
  );
}

export default App;
