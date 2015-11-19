(function(){

  function PublishCtrl($scope,$log,$http,$timeout,$location,fileReader){

    $scope.product = {};

    $scope.product.imageSrc = 'src/app.assets/img/placeholder.jpg';
    $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.product.imageSrc = result;
                      });
    };
  }

  PublishCtrl.$inject = ['$scope','$log','$http','$timeout','$location','fileReader'];

  angular.module('app')
    .controller('PublishCtrl',PublishCtrl)

}());
