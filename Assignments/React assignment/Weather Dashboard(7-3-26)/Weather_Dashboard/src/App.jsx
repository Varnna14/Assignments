import React, { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Kochi&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      setWeather(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
}, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].main}</p>
    </div>
  );
}

export default App;