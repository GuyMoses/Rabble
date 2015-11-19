(function(){

  function DiscoverCtrl($log,$http,$timeout,$location){
    // Ctrl Params
    this.active = $location.path().substring(1);

    // Current Position
    $log.info("Currently on " + this.active);

    this.GoTo = function(destination){
      $location.path(destination);
    }
  }

  DiscoverCtrl.$inject = ['$log','$http','$timeout','$location'];

  angular.module('discover')
    .controller('DiscoverCtrl',DiscoverCtrl)
}());
