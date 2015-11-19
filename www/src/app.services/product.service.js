(function() {

  function Product(http, Backand, MainService) {
    this.create = function(data) {
      return MainService.create("products", data);
    };
    this.searchByCategory = function(category) {
      return http({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/objects/products',
        params: {
          "filter": [{
                "fieldName": "category",
                "operator": "equals",
                "value": category
              }]
        }
      });
    }
  }
  Product.$inject = ["$http", "Backand", "MainService"];

  angular.module('services').service('Product', Product);
})();
