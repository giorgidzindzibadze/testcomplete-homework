function openingOrder(){
  TestedApps.Orders.Run()
 
}

function AddOrder1(){
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  Aliases.Orders.OrderForm.Group.Customer.Click(26, 9);
  Aliases.Orders.OrderForm.Group.Customer.SetText("add order2");
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
}

function AddOrder2(){
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  Aliases.Orders.OrderForm.Group.Customer.Click(26, 9);
  Aliases.Orders.OrderForm.Group.Customer.SetText("add order3");
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
}


function CheckOrder1(){
  Aliases.Orders.MainForm.OrdersView.DblClickItem("add order2", 0);

    var customerField = Aliases.Orders.OrderForm.Group.Customer;


    var customerText = customerField.wText;
    if (customerText.includes("add order2")) {
        Log.Message("Order details are correct.");
    } else {
        Log.Error("Order details do not match expectations.");
    }
    Aliases.Orders.OrderForm.Close();
}


function checkOrder2(){
   Aliases.Orders.MainForm.OrdersView.DblClickItem("add order3", 0);
   var customerField = Aliases.Orders.OrderForm.Group.Customer;
    var customerText = customerField.wText;
    if (customerText.includes("add order3")) {
        Log.Message("Order details are correct.");
    } else {
        Log.Error("Order details do not match expectations.");
    }
    Aliases.Orders.OrderForm.Close();
  

}


function deleteOrders(){
  Aliases.Orders.MainForm.OrdersView.ClickItemR("add order2", 0);
  Aliases.Orders.MainForm.OrdersView.PopupMenu.Click("Delete order");
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
  Aliases.Orders.MainForm.OrdersView.ClickItemR("add order3", 0);
  Aliases.Orders.MainForm.OrdersView.PopupMenu.Click("Delete order");
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
}

function closingOrder(){
  Aliases.Orders.MainForm.Close();
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
  TestedApps.Orders.Close();

}





module.exports.openingOrder = openingOrder;
module.exports.AddOrder1 = AddOrder1;
module.exports.AddOrder2 = AddOrder2;
module.exports.CheckOrder1 = CheckOrder1;
module.exports.checkOrder2 = checkOrder2;
module.exports.deleteOrders = deleteOrders;
module.exports.closingOrder = closingOrder;
