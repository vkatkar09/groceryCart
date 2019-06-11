(function() {
    var app = angular.module("myApp");

    var cartFunction = function($scope, $window, $http) {
        $scope.inventory = [
            { id :  1, product : "Salt",   price :   10, qty : 1 },
            { id :  2, product : "Sugar",  price :   40, qty : 1 },
            { id :  3, product : "Rice",   price :   50, qty : 1 },
            { id :  4, product : "Milk",   price :   45, qty : 1 },
            { id :  5, product : "Butter", price :   40, qty : 1 }
          ];
          
          $scope.cart = [];
          
          var findItemById = function(items, id) {
              //finds item in the array by ID
            return _.find(items, function(item) {
              return item.id === id;
            });
          };
          
          $scope.getCost = function(item) {
            return item.qty * item.price;
          };
        
          $scope.addItem = function(itemToAdd) {
            var found = findItemById($scope.cart, itemToAdd.id);
            if (found) {
              found.qty += itemToAdd.qty;
            }
            else {
              $scope.cart.push(angular.copy(itemToAdd));}
          };
          
          $scope.getTotal = function() {
              //loops over all the items and calculate the sum
            var total =  _.reduce($scope.cart, function(sum, item) {
              return sum + $scope.getCost(item);
            }, 0);
            console.log('total: ' + total);
            return total;
          };
          
          $scope.clearCart = function() {
            $scope.cart.length = 0;
          };
          
          $scope.removeItem = function(item) {
            var index = $scope.cart.indexOf(item);
            $scope.cart.splice(index, 1);
          };
          
    
    }

    app.controller("cartController", cartFunction);

}());
