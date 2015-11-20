(function() {

  function Product(http, Backand, MainService, Auth) {
    this.findByGeo = function(distance, userId) {
      return http({
        method: 'GET',
        url: Backand.getApiUrl() + "/1/query/data/distance",
        params: {
          deep: true,
          relatedObjects: true,
          parameters: {
            distance: distance,
            userId: userId
          }
        }
      })
    };
    this.find = function(id) {
      return http({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/objects/products/' + id
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
          deep: true,
          relatedObjects: true,
          "filter": [{
                "fieldName": "category",
                "operator": "equals",
                "value": category
              }]
        }
      });
    };
    this.updateGeo = function(lat, lon, id) {
      return http ({
                      method: 'POST',
                      url: Backand.getApiUrl() + '/1/objects/action/products/' + id,
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      params: {
                        name: 'Update Data In Product',
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
