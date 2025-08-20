function getWeatherByCoords(cityName, latitude, longitude) {
  return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    .then(response => response.json())
    .then(weatherData => {
      return {
        city: cityName,
        latitude,
        longitude,
        weather: weatherData.current_weather
      };
    });
}

Promise.all([
  getWeatherByCoords("Chennai", 13.0827, 80.2707),
  getWeatherByCoords("Delhi", 28.6139, 77.2090),
  getWeatherByCoords("Mumbai", 19.0760, 72.8777)
])
  .then(results => {
    results.forEach(result => {
      const { city, latitude, longitude, weather } = result;
      console.log(`\nWeather for ${city} (Lat: ${latitude}, Lon: ${longitude})`);
      console.log(`Temperature: ${weather.temperature}°C`);
      console.log(`Windspeed: ${weather.windspeed} km/h`);
      console.log(`Weather Code: ${weather.weathercode}`);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
