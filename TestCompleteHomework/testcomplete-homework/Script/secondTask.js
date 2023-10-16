var MainClas = require("MainClas");
var ForAll = require("ForAll");

function MainRun(){
 let mainClass = MainClas.orderClass;
  ForAll.openingOrder();
  mainClass.AddingOrder();
  mainClass.AddWithButton();
  ForAll.closingOrder();
}

