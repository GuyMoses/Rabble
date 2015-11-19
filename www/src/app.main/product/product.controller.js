(function(){

  function ProductCtrl($log,$http,$timeout,$location, $routeParams ,Backand, Auth){
    // Ctrl Params
    this.user = Auth.currentUser;
    this.id = $routeParams.id;
  }

  ProductCtrl.$inject = ['$log','$http','$timeout','$location', '$routeParams','Backand', 'Auth'];

  angular.module('product')
    .controller('ProductCtrl',ProductCtrl)

}());
