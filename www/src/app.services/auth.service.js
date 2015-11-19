(function() {

  function Auth(http, Backand) {

    this.current_user = {'id': 1, 'name': 'Guy Moses'};

    this.Login = function(){
      
    }
  }
  Auth.$inject = ["$http", "Backand"];

  angular.module('services')
    .service('Auth', Auth);
})();
