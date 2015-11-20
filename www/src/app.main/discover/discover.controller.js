(function(){

  function DiscoverCtrl($log,$http,$timeout,$location, Product){
    //Auth.currentUser.userId
    Product.findByGeo(50, 4).success(function(data) {
      $log.info("the stuff");
      $log.info(data);
    });

    this.popularItems = [
                          {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
                          {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
                          {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
                          {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'}
                        ];
    Product.searchByCategory('veg')
      .success(function(data){
        $log.debug(data);
      });

    this.vegItems = [
                        {'title': "Avi's Tomatoes", 'user': 'Guy Moses', 'description': 'perfectly red round tomatoes', 'percent': '90', 'price': '4.5$', 'date': '4 days to go'},
                        {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
                        {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
                        {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'}
                      ];
    Product.searchByCategory('veg')
      .success(function(data){
        $log.debug(data);
      });

    this.fruitItems = [
                        {'title': 'Or Oranges', 'user': 'Guy Moses', 'description': 'The best kind of oranges ever made.', 'percent': '68', 'price': '2$', 'date': '2 days to go'},
                        {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
                        {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'},
                        {'title': 'Kitchen aid', 'user': 'Guy Moses', 'description': 'Kitchen aid lets you mix stuff in the kitchen, its quite good.', 'percent': '70', 'price': '150$', 'date': '5 days to go'}
                      ];
    Product.searchByCategory('fruit')
      .success(function(data){
        $log.debug(data);
      });

    this.GoTo = function(destination){
      $location.path(destination);
    }

    this.doSomething = function() {
      Product.searchByCategory("tech").success(function(data) {
        $log.info(data);
      });
    };
  }

  DiscoverCtrl.$inject = ['$log','$http','$timeout','$location', 'Product'];

  angular.module('discover')
    .controller('DiscoverCtrl',DiscoverCtrl)
}());
