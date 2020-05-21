const axios = require("axios");

module.exports = async (location) => {
  const results = await axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=imperial`
    )
    .catch(function (error) {
      console.log(error);
    });
  return results.data;
};
