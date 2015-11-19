(function(){

  function appCtrl($log,$http,$timeout,$location){
    // Ctrl Params
    this.active = $location.path().substring(1);

    // Current Position
    $log.info("Currently on " + this.active);

  }

  appCtrl.$inject = ['$log','$http','$timeout','$location'];

  angular.module('app')
    .controller('appCtrl',appCtrl)

}());
