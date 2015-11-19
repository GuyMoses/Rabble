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
        $log.info("user id", Auth.currentUser.userId);
        // Auth.find(Auth.currentUser.userId).success(function(data) {
        //   if (data.totalRows == 0) {
        //     // create user
        //     MainService.create('users', {name: $scope.user.fullName, email: $scope.user.username, userId: $scope.user.userId}).success(function(data) {
        //       $log.info("successfully created the user", data);
        //     });
        //   } else {
        //     // keep on keeping on :)
        //     Auth.currentUser.id = data.data[0].id;
        //     MainService.update("users", Auth.currentUser).success(function(data) {
        //       $log.info("found you ;)", data);
        //     });
        //   }
        // });
      });
    };
  }

  NavCtrl.$inject = ['$log','$http','$timeout','$location', 'Backand', 'Auth', "MainService"];

  angular.module('navigation')
    .controller('NavCtrl',NavCtrl)

}());
