import { useEffect, useState } from "react";
import "./App.css";
import CardQuiz from "./components/CardQuiz/CardQuiz";
import CardResult from "./components/CardResult/CardResult";
import { fetchCountriesData } from "./utils/fetchContries";
import { generateCountryQuestions } from "./utils/generateCountryQuestions";

function App() {
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newGame, setNewGame] = useState(true);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountriesData();
        setQuestions(generateCountryQuestions(data));
        setLoading(false);
        setNewGame(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [newGame]);

  const handleNewGame = () => {
    setNewGame(true);
    setLoading(true);
    setScore(0);
    setFinish(0);
  }

  console.log(score);
  return (
    <>
      {!loading && (finish < 10 ? <CardQuiz 
        questions={questions} 
        setScore={setScore}
        setFinish={setFinish}
        /> : 
        <CardResult score={score} handleNewGame={handleNewGame} />)
      }
    </>
  );
}

export default App;
