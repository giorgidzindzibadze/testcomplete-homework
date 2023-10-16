var ForAll = require("ForAll");
var Dates = require("Dates");
var Addresses = require("Addresses");

function EventControl1_OnLogMessage(Sender, LogParams)
{
  Log.Checkpoint("This is message error listener")
}

class OrderClass{
  constructor(){
    this.mainOrderForm = Aliases.Orders.OrderForm;
    this.streetName = Aliases.Orders.OrderForm.Group.label8;
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
  
  checkAdding(){
    this.mainMenu.Click("Orders|New order...");
    this.custName.Keys(Project.Variables.Var1);
    ForAll.CustomAssert(this.custName.wText,Project.Variables.Var1)
    this.okBtn.ClickButton();
  }
  
  checkDeleting(){
    this.ordersView.DblClickItem(Project.Variables.Var1, 0);
    this.custName.Keys("[BS]"); 
    ForAll.assertForDeleting(this.custName.wText, Project.Variables.Var1);
    this.okBtn.ClickButton();

  }
  
  streetValidation(){
    this.mainMenu.Click("Orders|New order...");
    ForAll.CustomAssert(this.streetName.Text,Dates.street);
  }
  
  writeAddress(){
    var streetField =  Aliases.Orders.OrderForm.Group.WinFormsObject("Street");//zemodan ar moaqvs, aerorebs
    streetField.Keys(Dates.address);
    this.okBtn.ClickButton();

  }
  
  writeCity(){
    this.mainMenu.Click("Orders|New order...");
    var city = Aliases.Orders.OrderForm.Group.WinFormsObject("City");// arc es moaqvs zemodan
    city.Keys(Addresses.city);
  }
  
  writeZipCode(){
    var zipcode =Aliases.Orders.OrderForm.Group.WinFormsObject("Zip");
    zipcode.Keys(Addresses.zipCode);
  }
  
  writeStreetLocation(){
    var streetField =  Aliases.Orders.OrderForm.Group.WinFormsObject("Street");
    streetField.Keys(Addresses.street);
    this.custName.Keys(Project.Variables.Var1);// davamate usaxelod rom ar darcheniliyo
    this.okBtn.ClickButton();
    
  }
}

var orderClass = new OrderClass();

module.exports.orderClass = orderClass;



