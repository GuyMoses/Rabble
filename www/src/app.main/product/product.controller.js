(function(){

  function ProductCtrl($log,$http,$timeout,$location, $routeParams ,Backand, Auth, Product){
    // Ctrl Params
    this.user = Auth.currentUser;
    this.service = Auth;
    this.id = $routeParams.id;

    // this.product = {'title': "David's Weed", 'user': 'David Kaplan', "description": "Weed might me helpful sometimes, david's weed is well known around the bay area.", 'supporters': '70', 'price': '150$', 'date': '5 days to go','amount': '20 kilos'}
    this.product = {};

    $scope = this;
    Product.find(this.id)
      .success(function(data){
        $log.info(data);
        $scope.product = data;
      });

    this.support = function() {
      Product.createSupport(Auth.currentUser.id, this.id).success(function() {
        // go to the things I've supported
        $location.path("/profile/" + Auth.currentUser.id);
      });
    };
  }

  ProductCtrl.$inject = ['$log','$http','$timeout','$location', '$routeParams','Backand', 'Auth', 'Product'];

  angular.module('product')
    .controller('ProductCtrl',ProductCtrl)

}());
