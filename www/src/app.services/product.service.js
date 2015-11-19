(function() {

  function Product(http, Backand, MainService) {
    this.create = function(data) {
      return MainService.create("products", data);
    };

  }
  Product.$inject = ["$http", "Backand", "MainService"];

  angular.module('services').service('Product', Product);
})();
