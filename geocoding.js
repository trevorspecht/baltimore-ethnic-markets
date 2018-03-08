
const request = require('request');

// request('http://api.mapbox.com/geocoding/v5/mapbox.places/Baltimore.json?access_token=pk.eyJ1IjoidHJldm9yc3BlY2h0IiwiYSI6ImNqNDdjZ2hvNjAxYWkzMmp0YW90bWhsZmwifQ.0d4-iKYzF8sy7YFpzVOKUA', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


request('http://api.mapbox.com/geocoding/v5/mapbox.places/address=8837+Belair+Road.json?access_token=pk.eyJ1IjoidHJldm9yc3BlY2h0IiwiYSI6ImNqNDdjZ2hvNjAxYWkzMmp0YW90bWhsZmwifQ.0d4-iKYzF8sy7YFpzVOKUA', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
