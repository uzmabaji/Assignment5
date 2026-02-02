(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// TO BUY CONTROLLER
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;

  buy.items = ShoppingListCheckOffService.getToBuyItems();

  buy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

// ALREADY BOUGHT CONTROLLER
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

// SERVICE
function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "apples", quantity: 5 },
    { name: "oranges", quantity: 5 },
    { name: "bananas", quantity: 10 },
    { name: "milk", quantity: 1 }
  ];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems.splice(itemIndex, 1)[0];
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
