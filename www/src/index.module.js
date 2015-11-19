(function(){
  function Run(){

  }
  Run.$inject = [];

  function Config($routeProvider, BackandProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: '/src/app.main/app/app.html'
      })
      .when('/publish',{
        templateUrl: '/src/app.main/publish/publish.html'
      })
      .when('/discover',{
        templateUrl: '/src/app.main/discover/discover.html'
      })
      .when('/product/:id',{
        templateUrl: '/src/app.main/product/product.html'
      })
      .when('/profile/:id',{
        templateUrl: '/src/app.main/profile/profile.html'
      })
      .otherwise({
        redirectTo: '/'
      });

      BackandProvider.setAppName('rabble');
      BackandProvider.setSignUpToken('b3d67378-e181-4d6f-8bd9-a8c24482c7d6');
      BackandProvider.setAnonymousToken('fc803baf-ee27-4382-8413-96e9e822ccbb');
  }
  Config.$inject = ['$routeProvider', 'BackandProvider'];

  var app = angular.module('TheGratApp',['ngRoute', 'backand','navigation','app','publish','product','profile','discover', 'services'])
                    .run(Run)
                    .config(Config);

  app.directive("ngFileSelect",function(){
    return {
      link: function($scope,el){
        el.bind("change", function(e){
          $scope.file = (e.srcElement || e.target).files[0];
          $scope.getFile();
        })
      }
    }
  });

}());

/*
            ['app',
            'ngRoute'
            ])
            .run(Run)
            .config(['$routeProvider',
            function($routeProvider){
              $routeProvider.when('/',
              {
                templateUrl: '/src/app.main/app/app.html'
              }).
              when('/about',
              {
                templateUrl: '/src/app.main/about/about.html'
              }).
              when('/support',
              {
                templateUrl: '/src/app.main/support/support.html'
              }).
              otherwise({
                redirectTo: '/'
              });
            }]);
}())
*/
