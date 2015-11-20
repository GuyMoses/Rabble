(function(){

  function ProfileCtrl($log,$http,$timeout,$location, $routeParams ,Backand, Auth, Product){
    // Ctrl Params
    this.user = Auth.currentUser;
    this.id = $routeParams.id;

    Product.findMine(this.id).success(function(data) {
      this.popularItems = data;
    })
    //
    // this.popularItems = [
    //                       {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
    //                       {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
    //                       {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
    //                       {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'}
    //                     ];
    this.GoTo = function(destination){
      $location.path(destination);
    }
  }

  ProfileCtrl.$inject = ['$log','$http','$timeout','$location', '$routeParams','Backand', 'Auth', 'Product'];

  angular.module('profile')
    .controller('ProfileCtrl',ProfileCtrl)

}());
