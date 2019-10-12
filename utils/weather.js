// Getting current taa A
//APPID = 111f1f0574ba730a78eb8df6839d3e0c
const axios = require('axios')
const http = require('http')

// module.exports = async (location) => {
//   const results = await axios({
//     method: 'get',
//     url: '',
//     params: {
//       format: 'json',
//       q: `select item from weather.forecast where woeid in
//         (select woeid from geo.places(1) where text="${location}")`,
//     },
//   })

//   return results.data.query.results.channel.item
// }
module.exports = async (location) => {
  const results = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=111f1f0574ba730a78eb8df6839d3e0c`)
  .catch(function (error){
    console.log(error)
  })
  return results.data
}

// HTTP Request using standard HTTP library


// module.exports = (location) => {
// http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=111f1f0574ba730a78eb8df6839d3e0c`, (resp) => {
//   let rawData = '';

//   resp.on('data', (chunk) => {
//     rawData += chunk;
//   });

//   resp.on('end', () => {
//     try {
//       const parsedData = JSON.parse(rawData);
//       return parsedData;
//     } catch (e) {
//       console.log(e.messag);
//     }
//   });
// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });
// }