(function() {

  function Auth(http, Backand, MainService) {

    this.currentUser = null;

    this.find = function(userId){
      return MainService.find("users", [{"fieldName": "userId", "operator": "equals", "value": "" + userId}]);
    };
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
  }
  Auth.$inject = ["$http", "Backand", "MainService"];

  angular.module('services')
    .service('Auth', Auth);
})();
