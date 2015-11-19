(function(){

  function PublishCtrl($scope,$log,$http,$timeout,$location,fileReader, Product){

    $scope.product = {};
    $scope.publishing = false;

    $scope.product.imageSrc = 'src/app.assets/img/placeholder.jpg';
    $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.product.imageSrc = result;
                      });
    };

    $scope.Publish = function(){
      $scope.publishing = true;
      Product.uploadImage($scope.product.title, $scope.product.imageSrc).success(function(data) {
        $log.info(data);
        $scope.product.imageUrl = data.url
        Product.create($scope.product).success(function(data) {
          $log.info(data);
          $scope.publishing = false;
        });
      });
      //"https://api.backand.com/1/objects/action/products/?name=S3FileUpload&parameters=%7B%22filename%22:%22%22,%22filedata%22:%22%22%7D"

      //
    }
  }

  PublishCtrl.$inject = ['$scope','$log','$http','$timeout','$location','fileReader', "Product"];

  angular.module('app')
    .controller('PublishCtrl',PublishCtrl)

}());
