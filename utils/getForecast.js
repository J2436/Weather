const axios = require("axios");

module.exports = async (location) => {
  const results = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${process.env.API_KEY}&units=imperial`
    )
    .catch(function (error) {
      console.log(error);
    });
  return results.data;
};
