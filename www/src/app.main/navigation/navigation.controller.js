(function(){

  function NavCtrl($log,$http,$timeout,$location){
    // Ctrl Params
    this.active = $location.path().substring(1);

    // Current Position
    $log.info("Currently on " + this.active);

    this.GoTo = function(destination){
      $location.path(destination);
    }
  }

  NavCtrl.$inject = ['$log','$http','$timeout','$location'];

  angular.module('navigation')
    .controller('NavCtrl',NavCtrl)

}());
