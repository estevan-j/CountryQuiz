import "./questions.scss";
import Answer from "../Answer/Answer";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Question = ({ data, onClickTried, onClickHandleSetSelect }) => {
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const handleClickAnswer = (correct = false) => {
    onClickTried(data.id, correct);
  };

  const handleSetSelect = (key) => {
    onClickHandleSetSelect(data.id, key);
  };

  useEffect(() => {
    setQuestionAnswered(data.tried);
  }, [data]);

  return (
    <>
      <span>
        {data.question.split(/(https?:\/\/\S+\.png)/).map((part, index) => {
          if (part.match(/(https?:\/\/\S+\.png)/)) {
            return (
              <img
                className="w-[30px] h-[20px] rounded"
                key={index}
                src={part}
                alt="Flag"
              />
            );
          } else {
            return <span key={index}>{part}</span>;
          }
        })}
      </span>
      <div className="container-answer">
        {data.answers.map((item) => (
          <Answer
            key={item.id}
            answer={item.answer}
            answerCorrect={data.correctAnswer}
            questionAnswered={questionAnswered}
            stopClick={handleClickAnswer}
            selectedElement={item.selected}
            onSetSelected={() => handleSetSelect(item.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Question;
