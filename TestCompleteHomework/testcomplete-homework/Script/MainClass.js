var GetRequest = require("GetRequest");
var RandomFunction = require("RandomFunction");
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
  
  radioButtunValidation(){
    this.mainMenu.Click("Orders|New order...");
    var radio = this.group.FindAllChildren("ClrClassName", "RadioButton");
    ForAll.CustomAssert(radio.length, Dates.expectedItemCount);
    this.mainOrderForm.WinFormsObject("ButtonCancel").ClickButton();
  }
  
  addRandomCardNumber(){
    this.mainMenu.Click("Orders|New order...");
    var cardField =this.group.WinFormsObject("CardNo");
    var randomCardNumber = RandomFunction.generateRandomCardNumber();
    cardField.Keys(randomCardNumber);    
  }
  
  getCopyNumber(){
    var cardField =this.group.WinFormsObject("CardNo");
    cardField.Keys("^a^c");    
    Log.Checkpoint( Sys.Clipboard);
  }
  
  addOrder(){
    this.okBtn.ClickButton();
  }
  
  addOrdeForRedacting(){
    this.mainMenu.Click("Orders|New order...");
    this.custName.Keys(Project.Variables.Var1);
    var zipcode =Aliases.Orders.OrderForm.Group.WinFormsObject("Zip");
    zipcode.Keys(Addresses.zipCode);
    this.okBtn.ClickButton();
    
  }
  
  changeOrder(){
    this.ordersView.DblClickItem(Project.Variables.Var1, 0);
    this.group.WinFormsObject("Zip").Keys("[BS]"); 
    this.okBtn.ClickButton();

  }
  
  validateRedacting(){
    this.ordersView.DblClickItem(Project.Variables.Var1, 0);
    ForAll.assertForRedacting(Addresses.zipCode,this.group.WinFormsObject("Zip").Text);
    this.okBtn.ClickButton();

  }
  
  addKeyFromApi(){
   var json = GetRequest.getRequest(Dates.baseUrl);
   this.mainMenu.Click("Orders|New order...");
   var zipcode =Aliases.Orders.OrderForm.Group.WinFormsObject("Zip");
   zipcode.Keys(json.key)
   this.okBtn.ClickButton();
  }
  
  addCustNameFromApi(){
    var json = GetRequest.getRequest(Dates.typeUrl);
    this.mainMenu.Click("Orders|New order...");
    this.custName.Keys(json.activity)
    this.okBtn.ClickButton();
  }
  
}

var orderClass = new OrderClass();

module.exports.orderClass = orderClass;

