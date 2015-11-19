(function(){

  function NavCtrl($log,$http,$timeout,$location, Backand){
    // Ctrl Params
    this.active = $location.path().substring(1);

    // Current Position
    $log.info("Currently on " + this.active);

    this.GoTo = function(destination){
      $location.path(destination);
    }

    this.signIn = function() {
      Backand.socialSignin('facebook').then(function(data) {
        $log.info(data);
      });
    };
  }

  NavCtrl.$inject = ['$log','$http','$timeout','$location', 'Backand'];

  angular.module('navigation')
    .controller('NavCtrl',NavCtrl)

}());
