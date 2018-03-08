var mapbox = require('../geocoding-example/node/mapbox-geocode.js');
mapbox('pk.eyJ1IjoidHJldm9yc3BlY2h0IiwiYSI6ImNqNDdjZ2hvNjAxYWkzMmp0YW90bWhsZmwifQ.0d4-iKYzF8sy7YFpzVOKUA', '8837 Belair Rd, Nottingham, MD', function(err, data) { console.log(data); });
