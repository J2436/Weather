const ora = require("ora");
const getWeather = require("../utils/getToday");

module.exports = async (args) => {
  const spinner = ora().start();
  try {
    const location = args.location || args.l;
    const weather = await getWeather(location);

    spinner.stop();

    console.log(`Current conditions in ${location}:`);
    console.log(`\t${weather.main.temp}°F ${weather.weather[0].description}`);
  } catch (err) {
    spinner.stop();
    console.error(err);
  }
};
