import { useEffect, useState } from "react";
import Check from "../icons/Check";
import Close from "../icons/Close";
import "./Answer.scss";
const Answer = ({ answer, answerCorrect, questionAnswered, stopClick, selectedElement, onSetSelected}) => {
  const [selected, setSelected] = useState(false);
  const [correct, setCorrect] = useState("");
  const [showCorrect, setShowCorrect] = useState(false);
  const [stopSelecting, setStopSelection] = useState(false);

  const handleClickAnswer = () => {
    if (!stopSelecting) {
      setShowCorrect(true);
      setStopSelection(true);
      setSelected(true);
      onSetSelected();
      stopClick(correct);
    }
  };

  useEffect(() => {
    setStopSelection(questionAnswered);
    if (correct) {
      setShowCorrect(true);
    }
  }, [questionAnswered]);

  useEffect(() => {
    setShowCorrect(questionAnswered && correct);
  }, [correct]);

  useEffect(() => {
    if (selectedElement) {
      setSelected(true);
    }
    setCorrect(answerCorrect === answer);
  }, [answer]);

  return (
    <button
      value={answer}
      className={`option-answer ${selected ? "selected" : ""}`}
      onClick={handleClickAnswer}
    >
      {answer}
      <div style={{ display: `${showCorrect ? "block" : "none"}` }}>
        {correct ? <Check /> : <Close />}
      </div>
    </button>
  );
};

export default Answer;
