(function(){

  function ProfileCtrl($log,$http,$timeout,$location, $routeParams ,Backand, Auth, Product){
    // Ctrl Params
    this.user = Auth.currentUser;
    this.id = $routeParams.id;

    this.popularItems = [];
    $scope = this;
    Product.findMine(this.id).success(function(data) {
      $log.info(data);
      $scope.popularItems = data;
    })

    this.GoTo = function(destination){
      $location.path(destination);
    }
  }

  ProfileCtrl.$inject = ['$log','$http','$timeout','$location', '$routeParams','Backand', 'Auth', 'Product'];

  angular.module('profile')
    .controller('ProfileCtrl',ProfileCtrl)

}());
