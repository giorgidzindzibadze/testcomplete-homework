function openingOrder(){
  TestedApps.Orders.Run()
}

function AddOrder(){
  KeywordTests.Test3.Run()
  Aliases.Orders.MainForm.Activate();
  Aliases.Orders.MainForm.MainMenu.Click("File|Save As...");
  var randomValue = Math.floor(Math.random() * 10000000000000000) + 1;
  var randomValueString = randomValue.toString();
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.SetText(randomValueString);
  Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
  
}

function closingOrder(){
  TestedApps.Orders.Close()
}
module.exports.openingOrder = openingOrder;
module.exports.AddOrder = AddOrder;
module.exports.closingOrder = closingOrder;