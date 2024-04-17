import "./QuestionNumber.scss";

// eslint-disable-next-line react/prop-types, no-unused-vars
const QuestionNumbers = ({ tried, numberQuestion, setQuestionNumber }) => {
  // console.log(numberQuestion+' '+tried);
  return (
    <button
      key={numberQuestion}
      className={`n-question ${tried ? "answered" : ""}`}
      onClick={(e) => setQuestionNumber(e.target.value)}
      value={numberQuestion}
    >
      {numberQuestion + 1}
    </button>
  );
};

export default QuestionNumbers;
