(function(){

  function NavCtrl($log,$http,$timeout,$location, Backand, Auth){
    // Ctrl Params
    this.active = $location.path().substring(1);
    this.user = Auth.currentUser;
    // Current Position
    $log.info("Currently on " + this.active);

    this.GoTo = function(destination){
      $location.path(destination);
    }

    this.signIn = function() {
      $scope = this;
      Backand.socialSignIn('facebook').then(function(data) {
        $log.info(data);
        Auth.currentUser = Backand.getUserDetails().$$state.value;
        $log.info(Auth.currentUser);
        $scope.user = Auth.currentUser;
        $scope.showLogin = false;
      });
    };
  }

  NavCtrl.$inject = ['$log','$http','$timeout','$location', 'Backand', 'Auth'];

  angular.module('navigation')
    .controller('NavCtrl',NavCtrl)

}());
