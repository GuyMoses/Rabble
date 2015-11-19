(function(){

  function PublishCtrl($scope,$log,$http,$timeout,$location,fileReader, Product){

    $scope.product = {};

    $scope.product.imageSrc = 'src/app.assets/img/placeholder.jpg';
    $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.product.imageSrc = result;
                      });
    };

    $scope.Publish = function(){
      Product.create($scope.product)
      $log.info($scope.product);
    }
  }

  PublishCtrl.$inject = ['$scope','$log','$http','$timeout','$location','fileReader', "Product"];

  angular.module('app')
    .controller('PublishCtrl',PublishCtrl)

}());
