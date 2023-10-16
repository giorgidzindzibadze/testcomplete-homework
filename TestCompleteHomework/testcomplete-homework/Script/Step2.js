function EventControl1_OnLogMessage(Sender, LogParams)
{
  Log.Checkpoint("This is message error listener")
}
function concatDigitSums(num1, num2) {
    const strNum1 = aqConvert.VarToStr(num1);
    const strNum2 = aqConvert.VarToStr(num2);
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < strNum1.length; i++) {
        sum1 += parseInt(aqString.GetChar(strNum1, i));
    }

    for (let i = 0; i < strNum2.length; i++) {
        sum2 += parseInt(aqString.GetChar(strNum2, i));
    }

    const concatenatedSums = aqConvert.StrToInt(aqConvert.VarToStr(sum1) + aqConvert.VarToStr(sum2));

    return concatenatedSums;
}



function TodaySpecificPattern()
{
    var currentDate = aqDateTime.Today();
    var day = aqDateTime.GetDay(currentDate);
    var month = aqDateTime.GetMonth(currentDate);
    var year = aqDateTime.GetYear(currentDate);



    Log.Message("Date: " + month + "/" + day + "/" + year);
}
module.exports.concatDigitSums = concatDigitSums;
module.exports.TodaySpecificPattern = TodaySpecificPattern;