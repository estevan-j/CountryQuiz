const questions = [
  "Which country is ${randomCountry.capital} the capital ?",
  "Which country does this flag ${randomCountry.flags.png} belong to?",
  "Which capital is ${randomCountry.name.common} the country ?",
  "Which country is ${randomCountry.capital} the capital ?",
  "Which capital is ${randomCountry.name.common} the country ?",
  "Which country is ${randomCountry.capital} the capital ?",
  "Which country does this flag ${randomCountry.flags.png} belong to?",
  "Which capital is ${randomCountry.name.common} the country ?",
  "Which capital is ${randomCountry.name.common} the country ?",
  "Which country does this flag ${randomCountry.flags.png} belong to?",
];

export function generateCountryQuestions(data) {
  const arrayData = [];

  for (let i = 0; i < 10; i++) {
    const arrayAnswers = [];
    const option = questions[i].includes("randomCountry.name.common")
      ? "capital"
      : "name.common";
    const numbers = new Set();

    while (numbers.size < 4) {
      const randomNumber = Math.floor(Math.random() * 251);
      numbers.add(randomNumber);
    }
    const randomNumbersArray = Array.from(numbers);

    for (let j = 0; j < 4; j++) {
      arrayAnswers.push({
        id: `${i}-${j}`,
        answer: option
          .replace("name.common", data[randomNumbersArray[j]]?.name.common)
          .replace("capital", data[randomNumbersArray[j]]?.capital),
        selected: false,
      });
    }

    arrayData.push({
      id: i,
      question: questions[i]
        .replace(
          "${randomCountry.capital}",
          data[randomNumbersArray[0]]?.capital
        )
        .replace(
          "${randomCountry.flags.png}",
          data[randomNumbersArray[0]]?.flags.png
        )
        .replace(
          "${randomCountry.name.common}",
          data[randomNumbersArray[0]]?.name.common
        ),
      correctAnswer: option
        .replace("name.common", data[randomNumbersArray[0]]?.name.common)
        .replace("capital", data[randomNumbersArray[0]]?.capital),
      answers: shuffleArray(arrayAnswers),
      tried: false,
      correct: false,
    });
  }

  return arrayData;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at indices i and j
  }
  return array;
}
