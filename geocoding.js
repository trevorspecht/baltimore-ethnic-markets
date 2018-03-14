
const request = require('request');

request('http://api.mapbox.com/geocoding/v5/mapbox.places/address=8837+Belair+Road.json?access_token=pk.eyJ1IjoidHJldm9yc3BlY2h0IiwiYSI6ImNqNDdjZ2hvNjAxYWkzMmp0YW90bWhsZmwifQ.0d4-iKYzF8sy7YFpzVOKUA', function (error, response, body) {
  if(error){
    console.log(error);
  }
  const data = JSON.parse(body);

  const array = {features:
                  [{
                    relevance: 1
                  },
                    {
                      relevance: 2
                    },
                    {
                      relevance: 3
                    }
                  ]};

  const array123 = [1, 2, 3];


// console.log(data);

  // for (i = 0; i < data.features.length; i++) {
  //   console.log(data.features[i].relevance);
  //   console.log(data.features[i].place_name);
  // }

  array123.forEach(function(element) {
  console.log(element);
  });

});
