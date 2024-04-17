import { useEffect, useState } from "react";
import "./CardQuiz.scss";
import QuestionNumbers from "../QuestionNumbers/QuestionNumber";
import Question from "../Question/Question";

// eslint-disable-next-line react/prop-types, no-unused-vars
const CardQuiz = ({ questions, setScore, setFinish }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionsData, setQuestionsData] = useState(questions);

  const handleTried = (index, correct) => {
    setQuestionsData((prevQuestionsData) => {
      const updatedQuestionsData = [...prevQuestionsData];
      updatedQuestionsData[index] = {
        ...updatedQuestionsData[index],
        tried: true,
        correct: correct,
      };
      return updatedQuestionsData;
    });
    setFinish((prev) => prev+1);
    if (correct) {
      setScore((prev) => prev+1);
    }
  };

  const handleSetSelect = (questionId, answerId) => {
    // Create a copy of the questionsData array
    const updatedQuestionsData = [...questionsData];
    // Find the question object in the array by its id
    const questionIndex = updatedQuestionsData.findIndex(
      (question) => question.id === questionId
    );
    if (questionIndex !== -1) {
      // Find the answer object within the question's answers array by its id
      const answerIndex = updatedQuestionsData[questionIndex].answers.findIndex(
        (answer) => answer.id === answerId
      );
      if (answerIndex !== -1) {
        // Update the selected property of the answer object to true
        updatedQuestionsData[questionIndex].answers[
          answerIndex
        ].selected = true;

        // Update the state with the modified array
        setQuestionsData(updatedQuestionsData);
      }
    }
  };

  return (
    <section className="card-quiz">
      <h4>Country Quiz</h4>
      <div className="question-number">
        {questionsData &&
          questionsData.map((question) => (
            <QuestionNumbers
              key={question.id}
              tried={question.tried}
              numberQuestion={question.id}
              setQuestionNumber={setQuestionNumber}
            />
          ))}
      </div>
      <Question data={questionsData[questionNumber]} 
        onClickTried={handleTried}
        onClickHandleSetSelect={handleSetSelect}
      />
    </section>
  );
};

export default CardQuiz;
