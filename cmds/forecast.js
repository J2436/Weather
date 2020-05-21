const axios = require("axios");
module.exports = async (args) => {
  const location = args.location || args.l;
  const { lon, lat } = await require("../utils/getToday")(location).then(
    (data) => {
      return data.coord;
    }
  );
  const forecast = await require("../utils/getForecast")({ lon, lat });
  for (let day of forecast.daily) {
    console.log(new Date(day.dt * 1000).toDateString());
    console.log(" Weather:", day.weather[0].description);
    console.log(` Morning:  ${day.temp.morn}°F`);
    console.log(` Day    :  ${day.temp.day}°F`);
    console.log(` Evening:  ${day.temp.eve}°F`);
    console.log(` Night  :  ${day.temp.night}°F\n`);
  }
};
