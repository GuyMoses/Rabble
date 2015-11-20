(function(){

  function PublishCtrl($scope,$log,$http,$timeout,$location,fileReader, Product, Backand, Auth){

    $scope.user = Auth.currentUser;

    if(!$scope.user){
      $location.path('');
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
      if (Auth.currentUser) {
        $scope.publishing = true;
        Product.uploadImage($scope.product.title, $scope.product.imageSrc).success(function(data) {
          $log.info(data);
          $scope.product.imageUrl = data.url;
          // $scope.product.user = ;
          $scope.product.geom = "ST_GeomFromText('POINT(1, 1)')";
          $scope.product.owner = Auth.currentUser.id;
          Product.create($scope.product).success(function(data) {
            $log.info(data);
            $scope.publishing = false;
            navigator.geolocation.getCurrentPosition(function(result){
              Product.updateGeo(result.coords.latitude,result.coords.longitude,Auth.currentUser.id,data.id)
                .success(function(crap){
                  $log.info(crap);
                });
            });
            $location.path('');
          });
        });
      }
    }
  }

  PublishCtrl.$inject = ['$scope','$log','$http','$timeout','$location','fileReader', "Product", 'Backand','Auth'];

  angular.module('app')
    .controller('PublishCtrl',PublishCtrl)

}());
