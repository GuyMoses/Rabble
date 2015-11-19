(function() {

  function Run() {

  }
  Run.$inject = [];

  function Config() {

  }
  Config.$inject = [];

  function MainService(http, Backand) {
    this.create = function(name, data) {
      return http({
        method: 'POST',
        url: Backand.getApiUrl() + '/1/objects/' + name,
        data: data
      });
    }
  }
  MainService.$inject = ["$http", "Backand"];

  angular.module('services', [
  ])
  .service("MainService", MainService)

})();
