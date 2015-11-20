(function(){

  function AppCtrl($log,$http,$timeout,$location,Product){
    // Ctrl Params
    this.active = $location.path().substring(1);

    // Current Position
    $log.info("Currently on " + this.active);

    this.pick = null;
    $scope = this;
    Product.find(33)
      .success(function(data){
        $log.info(data);
        $scope.pick = data;
      });

    this.GoTo = function(destination){
      $location.path(destination);
    }
  }

  AppCtrl.$inject = ['$log','$http','$timeout','$location','Product'];

  angular.module('app')
    .controller('AppCtrl',AppCtrl)

}());
