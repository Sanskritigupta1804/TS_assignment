fetch(`https://api.open-meteo.com/v1/forecast?latitude=13.0878&longitude=80.27847&current_weather=true`)
.then(response => response.json())
  .then(weatherData => {
    console.log("Weather Data for Chennai:", weatherData.current_weather);
    const { temperature, windspeed, weathercode } = weatherData.current_weather; //destructuring
    console.log(`Temperature: ${temperature}°C, Windspeed: ${windspeed} km/h, Code: ${weathercode}`);
  })
  .catch(error => {
    console.error("Error:", error);
  });