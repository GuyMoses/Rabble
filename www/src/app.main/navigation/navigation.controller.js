(function(){

  function NavCtrl($log,$http,$timeout,$location, Backand, Auth, MainService){
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
        $log.info("facebook data", data);
        Auth.currentUser = Backand.getUserDetails().$$state.value;
        $log.info("Auth user", Auth.currentUser);
        $scope.user = Auth.currentUser;
        $scope.showLogin = false;
        var members = $http({method:"GET",url: Backand.getApiUrl() + "/1/objects/users?filter=" +
        "[{\"fieldName\": \"email\",\"operator\": \"equals\",\"value\": \"" + Auth.currentUser.username + "\"}]"});
        members.success(function(bytes) {
          Auth.currentUser.id = bytes.data[0].id;
          navigator.geolocation.getCurrentPosition(function(result){
            $log.info(result.coords.latitude);
            $log.info(result.coords.longitude);
          });
        });
      });
    };
  }

  NavCtrl.$inject = ['$log','$http','$timeout','$location', 'Backand', 'Auth', "MainService"];

  angular.module('navigation')
    .controller('NavCtrl',NavCtrl)

}());
