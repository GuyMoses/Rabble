(function(){

  function DiscoverCtrl($log,$http,$timeout,$location, Product){
    //Auth.currentUser.userId
    Product.findByGeo(50, 4).success(function(data) {
      $log.info("Geo Item");
      $log.info(data);
      $log.info("End");
    });

    $scope = this;
    this.popularItems = [];
    Product.searchByCategory('popular')
      .success(function(data){
        $log.debug(data);
        $scope.popularItems = data.data;
      });

    this.vegItems = [];
    Product.searchByCategory('veg')
      .success(function(data){
        $log.debug(data);
        $scope.vegItems = data.data;
      });

    this.fruitItems = [];
    Product.searchByCategory('fruit')
      .success(function(data){
        $log.debug(data);
        $scope.fruitItems = data.data;
      });

      this.nearItems = [];
      Product.searchByCategory('near')
        .success(function(data){
          $log.debug(data);
          $scope.nearItems = data.data;
        });

    this.GoTo = function(destination,id){
      $location.path(destination+id);
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
