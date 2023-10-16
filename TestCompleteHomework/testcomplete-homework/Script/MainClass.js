var ForAll = require("ForAll");
var Dates = require("Dates");
class OrderClass{
  constructor(){
    this.mainOrderForm = Aliases.Orders.OrderForm;
    this.mainMenu =  Aliases.Orders.MainForm.MainMenu;
    this.toolBar = Aliases.Orders.MainForm.ToolBar;
    this.custName = this.mainOrderForm.Group.Customer;
    this.group = this.mainOrderForm.Group;
    this.priceField = this.group.Price;
    this.discountField = this.group.Discount;
    this.totalField = this.group.groupBox1.Total;
    this.ordersView = Aliases.Orders.MainForm.OrdersView;
    this.okBtn = this.mainOrderForm.ButtonOK;
  }
  
  AddingOrder(){
    this.mainMenu.Click("Orders|New order...");
    this.custName.Click(26, 9);
    var var1Value = Project.Variables.Var1;
    this.custName.SetText(var1Value);
    this.okBtn.ClickButton();
  }
  
  AddWithButton(){
    this.toolBar.ClickItem(4, false);
    var var2Value = Project.Variables.Var2;
    this.custName.SetText(var2Value);
    this.okBtn.ClickButton();
  }
  addingValidation(){
    aqObject.CheckProperty( this.ordersView, "wItem(\"let's add order\", 0)", cmpEqual, "let's add order");
    aqObject.CheckProperty( this.ordersView, "wItem(\"ordering\", 0)", cmpEqual, "ordering");
}
 numberOfProducts(){
    this.mainMenu.Click("Orders|New order...");
    var comboLBox = Aliases.Orders.Window("ComboLBox");
    var itemCount = comboLBox.wItemCount;
    ForAll.CustomAssert(itemCount,Dates.expectedItemCount);
    this.mainOrderForm.WinFormsObject("ButtonCancel").ClickButton();
}
 numberValidation(){
    this.mainMenu.Click("Orders|New order...");
    var var1Value = Project.Variables.Var1; 
    Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit.wValue = var1Value;
}

 addNewValues(){
   this.ordersView.DblClickItem("let's add order", 0);
   this.priceField.SetText("150");
   this.discountField.SetText("100");
   this.totalField.SetText(("70"));
   this.okBtn.ClickButton();
 }

 validateFields(){
   this.ordersView.DblClickItem("let's add order", 0);
   aqObject.CheckProperty(this.priceField, "wText", cmpEqual, "$100");
   aqObject.CheckProperty(this.discountField, "wText", cmpEqual, "0%");
   aqObject.CheckProperty(this.totalField, "wText", cmpEqual, "100");
   this.okBtn.ClickButton();
 }
 
 checkDate(){
   this.ordersView.DblClickItem("let's add order", 0);
   var var1Value = Project.Variables.Var1; 
   this.group.WinFormsObject("Date").wDate = var1Value;

}
}

var orderClass = new OrderClass();

module.exports.orderClass = orderClass;