(function(){
  function Run(){

  }

  Run.$inject = [];

  var app = angular.module('TheGratApp',['ngRoute','navigation','app','publish'])
                    .run(Run)
                    .config(['$routeProvider',
                    function($routeProvider){
                      $routeProvider
                        .when('/',
                        {
                          templateUrl: '/src/app.main/app/app.html'
                        })
                        .when('/publish',{
                          templateUrl: '/src/app.main/publish/publish.html'
                        })
                        .otherwise({
                          redirectTo: '/'
                        });
                    }]);

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
