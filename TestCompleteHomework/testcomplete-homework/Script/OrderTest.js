var ForAll = require("ForAll");
var MainClass = require("MainClass");
let mainClass = MainClass.orderClass;

function addingOrders(){
  mainClass.AddingOrder();
  mainClass.AddWithButton();
}

function validateaAddedOrders(){
  mainClass.addingValidation();
}


function validateNumbersOfProduct(){
  ForAll.openingOrder();
  mainClass.numberOfProducts();
  ForAll.closingOrder();
}

function numberValidation(){
  mainClass.numberValidation();
}

function validateFields(){
  mainClass.addNewValues();
  mainClass.validateFields();
}

function validateDate(){
  mainClass.checkDate();
}

function run(){
  ForAll.openingOrder();
  mainClass.AddingOrder();
  mainClass.AddWithButton();
  mainClass.addingValidation();
  mainClass.numberOfProducts();
//  mainClass.numberValidation();
  mainClass.addNewValues();
  mainClass.validateFields();
 // mainClass.checkDate();// dakomentarebuli linebi aerorebs 
  ForAll.closingOrder();
}
module.exports.run = run;