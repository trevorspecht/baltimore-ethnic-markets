
const request = require('request');
request('https://api.mapbox.com/geocoding/v5/mapbox.places/2159%20W%20Patapsco%20Ave%2C%20Baltimore%2C%20MD.json?access_token=pk.eyJ1IjoidHJldm9yc3BlY2h0IiwiYSI6ImNqNDdjZ2hvNjAxYWkzMmp0YW90bWhsZmwifQ.0d4-iKYzF8sy7YFpzVOKUA', function (error, response, body) {
  if(error){
    console.log(error);
  }
  const data = JSON.parse(body);

  // console.log(data);

  // for (i = 0; i < data.features.length; i++) {
  //   console.log(data.features[i].relevance);
  //   console.log(data.features[i].place_name);
  // }

  data.features.forEach(function(element) {
  console.log(element.center);
  console.log(element.place_name);
  });

});
