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
    };
    this.find = function(name, params) {
      return http({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/objects/' + name,
        params: params
      });
    };
    this.update = function(name, data) {
      return http({
        method: "PUT",
        url: Backand.getApiUrl() + '/1/objects/' + name + "/" + data.id,
        data: data
      });
    };
  }
  MainService.$inject = ["$http", "Backand"];

  angular.module('services', [
  ])
  .service("MainService", MainService)

})();
