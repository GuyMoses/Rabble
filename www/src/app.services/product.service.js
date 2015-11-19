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
    };
    this.uploadImage = function(filename, filedata) {
      return http ({
        method: 'POST',
        url: Backand.getApiUrl() + '/1/objects/action/products/?name=S3FileUpload',
                                    ///1/objects/action/products/?name=S3FileUpload&parameters=%7B%22filename%22:%22%22,%22filedata%22:%22%22%7D"
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          "filename": "something.jpg",
          "filedata": filedata.substr(filedata.indexOf(',')+1, filedata.length) //need to remove the file prefix type
        }
      });
    };
  }
  Product.$inject = ["$http", "Backand", "MainService"];

  angular.module('services').service('Product', Product);
})();
