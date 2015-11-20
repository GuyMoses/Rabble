(function() {

  function Product(http, Backand, MainService, Auth) {
    this.findByGeo = function(lat, lon, id) {
      return http({
        method: 'GET',
        url: Backand.getApiUrl() + "/1/query/data/distance",
        params: {
          parameters: {
            distance:50,
            userId:4
          }
        }
      })
    };
    this.find = function(id) {
      return http({
        method: 'GET',
<<<<<<< HEAD
        url: Backand.getApiUrl() + '/1/objects/products/' + id
=======
        url: Backand.getApiUrl() + '/1/objects/products/' + id,
>>>>>>> e76eb7b94d2b301250fba42994a0a4cec8207430
      });
    };
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
    this.updateGeo = function(lat, lon, id) {
      return $http ({
                      method: 'PUT',
                      url: Backand.getApiUrl() + '/1/objects/users/' + id,
                      params: {
                        name: 'Update Geo For User',
                        parameters: {
                          lat: lat,
                          lon: lon
                        }
                      },
                      data: {
                        id: id,
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
          "filename": filename + ".jpg",
          "filedata": filedata.substr(filedata.indexOf(',')+1, filedata.length) //need to remove the file prefix type
        }
      });
    };
  }
  Product.$inject = ["$http", "Backand", "MainService", "Auth"];

  angular.module('services').service('Product', Product);
})();
