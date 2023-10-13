function openingOrder(){
  TestedApps.Orders.Run()
 
}

function closingOrder(){
  TestedApps.Orders.Close();

}

function CustomAssert(actualValue, expectedValue) {
    if (actualValue === expectedValue) {
        Log.Message("Assertion Passed" );
    } else {
        Log.Error("Assertion Failed");
    }
}
module.exports.CustomAssert = CustomAssert;
module.exports.openingOrder = openingOrder;
module.exports.closingOrder = closingOrder;