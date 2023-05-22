async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=f133f50f27924cca9c8122532232105&q=${location}`,
      { mode: "cors" }
    );

    const weatherData = await response.json();
    const currentWeather = weatherData.current.condition.text;
    const weatherIcon = weatherData.current.condition.icon;

    let weatherP = document.querySelector(".weather-result-container p");
    let weatherIconImg = document.querySelector(
      ".weather-result-container img"
    );

    weatherP.innerText = currentWeather;
    weatherIconImg.src = weatherIcon;

    getWeatherGif(currentWeather);
  } catch (error) {
    console.log("getWeather error:", error);
  }
}

// api stuff for the gif relating the current weather.

async function getWeatherGif(currentWeather) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=vPRFnFQO0KOSXXsIaXT6RonXysQQLkTv&s=${currentWeather}`,
      { mode: "cors" }
    );

    const gifData = await response.json();
    const weatherGif = document.querySelector(".image-container img");

    weatherGif.src = gifData.data.images.original.url;
  } catch (error) {
    console.log("getWeatherGif error:", error);
  }
}

//   api key
// https://api.weatherapi.com/v1/current.json?key=f133f50f27924cca9c8122532232105&q=london

// giphy
// https://api.giphy.com/v1/gifs/translate?api_key=vPRFnFQO0KOSXXsIaXT6RonXysQQLkTv&s=cats

export { getWeather };
