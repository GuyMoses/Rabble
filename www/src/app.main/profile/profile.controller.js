(function(){

  function ProfileCtrl($log,$http,$timeout,$location, $routeParams ,Backand, Auth){
    // Ctrl Params
    this.user = Auth.currentUser;
    this.id = $routeParams.id;

    this.popularItems = [
                          {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
                          {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
                          {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
                          {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'}
                        ];
  }

  ProfileCtrl.$inject = ['$log','$http','$timeout','$location', '$routeParams','Backand', 'Auth'];

  angular.module('profile')
    .controller('ProfileCtrl',ProfileCtrl)

}());
