var GetRequest = require("GetRequest");
var Dates = require("Dates");
//var Step2 = require("Step2");
var ForAll = require("ForAll");
var MainClass = require("MainClass");
let mainClass = MainClass.orderClass;


function radioButtunValidation(){
  mainClass.radioButtunValidation();
}

function addRandomCardNumber(){
  mainClass.addRandomCardNumber();
}

function getCopyNumber(){
  mainClass.getCopyNumber();
}

function addOrder(){
  mainClass.addOrder();
}

function addOrdeForRedacting(){
  mainClass.addOrdeForRedacting();
}

function changeOrder(){
  mainClass.changeOrder();
}

function validateRedacting(){
  mainClass.validateRedacting();
}


function run(){
  ForAll.openingOrder();
  mainClass.radioButtunValidation();
  mainClass.addRandomCardNumber();
  mainClass.getCopyNumber();
  mainClass.addOrder();
  mainClass.addOrdeForRedacting();
  mainClass.changeOrder();
  mainClass.validateRedacting();
  ForAll.closingOrder();
}
module.exports.run = run;


function addKeyFromApi(){
  mainClass.addKeyFromApi();
}

function addCustNameFromApi(){
  mainClass.addCustNameFromApi();
}

function apiRun(){
  ForAll.openingOrder();
  addKeyFromApi();
  addCustNameFromApi();
  ForAll.closingOrder();
}

module.exports.apiRun = apiRun;