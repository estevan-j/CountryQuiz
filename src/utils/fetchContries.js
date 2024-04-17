export const fetchCountriesData = () => {
  return fetch("https://restcountries.com/v3.1/all").then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
