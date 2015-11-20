(function() {

  function Auth(http, Backand, MainService) {

    this.currentUser = null;

    this.find = function(userId){
      return MainService.find("users", [{"fieldName": "userId", "operator": "equals", "value": "" + userId}]);
    };

    this.updateGeo = function(lat, lon, userId) {
      return $http ({
        method: 'PUT',
        url: Backand.getApiUrl() + '/1/objects/users/' + userId,
        params: {
          name: 'Update Geo For User',
          parameters: {
            lat: lat,
            lon: lon
          }
        },
        data: {
          id: userId,
        }
      });
    };
  }
  Auth.$inject = ["$http", "Backand", "MainService"];

  angular.module('services')
    .service('Auth', Auth);
})();
