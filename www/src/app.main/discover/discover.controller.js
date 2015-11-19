(function(){

  function DiscoverCtrl($log,$http,$timeout,$location, Product){
    // Ctrl Params
    this.active = $location.path().substring(1);

    // Current Position
    $log.info("Currently on " + this.active);

    this.GoTo = function(destination){
      $location.path(destination);
    }

    this.doSomething = function() {
      Product.searchByCategory("tech").success(function(data) {
        $log.info(data);
      });
    };
  }

  DiscoverCtrl.$inject = ['$log','$http','$timeout','$location', 'Product'];

  angular.module('discover')
    .controller('DiscoverCtrl',DiscoverCtrl)
}());
