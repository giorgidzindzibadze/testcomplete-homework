var Step2 = require("Step2");
var ForAll = require("ForAll");
var MainClass = require("MainClass");
let mainClass = MainClass.orderClass;

function checkAdding(){
  mainClass.checkAdding();
}

function checkDeleting(){
   mainClass.checkDeleting();
}

function streetValidation(){
  mainClass.streetValidation();
}

function writeAddress(){
   mainClass.writeAddress();
}

function writeCity(){
  mainClass.writeCity();
}

function writeZipCode(){
  mainClass.writeZipCode();
}

function writeStreetLocation(){
  mainClass.writeStreetLocation();
}



function run(){
  ForAll.openingOrder();
  mainClass.checkAdding();
  mainClass.checkDeleting();
  mainClass.streetValidation();
  mainClass.writeAddress();
  mainClass.writeCity();
  mainClass.writeZipCode();
  mainClass.writeStreetLocation();
  ForAll.closingOrder();
}
module.exports.run = run;


function concat(){
  var concNum = Step2.concatDigitSums(156,967);
  Log.Message(concNum)
}

function dateFormat(){
  Step2.TodaySpecificPattern();
}

function step2Run(){
  concat();
  dateFormat();
}
module.exports.step2Run = step2Run;