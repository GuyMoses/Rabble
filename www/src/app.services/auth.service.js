(function() {

  function Auth(http, Backand) {

    this.currentUser = null;

    this.Login = function(){

    }
  }
  Auth.$inject = ["$http", "Backand"];

  angular.module('services')
    .service('Auth', Auth);
})();
