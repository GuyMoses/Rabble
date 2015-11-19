(function(){

  function PublishCtrl($scope,$log,$http,$timeout,$location,fileReader, Product, Backand, Auth){

    $scope.user = Auth.currentUser;
    $scope.user = {'fullName': 'Guy Moses'};

    if(!$scope.user){
      Backand.socialSignIn('facebook').then(function(data) {
        $log.info(data);
        Auth.currentUser = Backand.getUserDetails().$$state.value;
        $log.info(Auth.currentUser);
        $scope.user = Auth.currentUser;
      });
    }

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
    }
  }

  PublishCtrl.$inject = ['$scope','$log','$http','$timeout','$location','fileReader', "Product", 'Backand','Auth'];

  angular.module('app')
    .controller('PublishCtrl',PublishCtrl)

}());
