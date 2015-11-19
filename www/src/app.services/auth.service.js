(function() {

  function Auth(http, Backand, MainService) {

    this.currentUser = null;

    this.find = function(userId){
      return MainService.find("users", [{"fieldName": "userId", "operator": "equals", "value": "" + userId}]);
    }
  }
  Auth.$inject = ["$http", "Backand", "MainService"];

  angular.module('services')
    .service('Auth', Auth);
})();
