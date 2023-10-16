var Dates = require("Dates");

var parts = Dates.address.split(',');
    var city = aqString.Trim(parts[0]);
    var street = aqString.Trim(parts[1]);
    var zipCode = aqString.Trim(parts[2]);
    
module.exports.city = city;
module.exports.street = street;
module.exports.zipCode = zipCode;