function openingOrder(){
  TestedApps.Orders.Run()
 
}

function closingOrder(){
  TestedApps.Orders.Close();

}

function CustomAssert(actualValue, expectedValue) {
    if (actualValue == expectedValue) {
        Log.Message("Assertion Passed" );
    } else {
        Log.Error("Assertion Failed");
    }
}

function assertForDeleting(actualValue, expectedValue){
  if (actualValue !== expectedValue) {
        Log.Message("Assertion Failed, Text is deleted" );
    } else {
        Log.Error("Assertion Passed");
    }
}

function assertForRedacting(actualValue, expectedValue){
  if (actualValue !== expectedValue) {
        Log.Message("Assertion Passed, Redaction is successfull" );
    } else {
        Log.Error("Assertion Passed");
    }
}
module.exports.CustomAssert = CustomAssert;
module.exports.openingOrder = openingOrder;
module.exports.closingOrder = closingOrder;
module.exports.assertForDeleting = assertForDeleting;
module.exports.assertForRedacting = assertForRedacting;