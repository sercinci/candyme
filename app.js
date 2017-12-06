var app = angular.module('candy', ['ngImgCrop']);

app.controller('candyCtrl', ['$scope', '$document', '$anchorScroll', function($scope, $document, $anchorScroll){
    $scope.step = 1;
    $scope.candy = {
        shape: 'square'
    };
    $scope.croppedPicture = '';
    $anchorScroll.yOffset = 84;

    $scope.chooseType = function(type){
        $scope.candy.type = type;
        $scope.step = 2;
        $anchorScroll('step_2');
        if (type == 'macaron') {
            $scope.candy.shape = 'circle';
        }
    }

    $scope.chooseChar = function(char){
        $scope.candy.char = char;
        $scope.step = 3;
        $anchorScroll('step_3');
    }

    $scope.scrollTo = function(id){
        $anchorScroll(id);
    }

    $scope.upload = function() {
    var f = document.getElementById('file').files[0],
        r = new FileReader();

    r.onloadend = function(e) {
      var data = e.target.result;
      //send your binary data via $http or $resource or do anything else with it
      $scope.picture = data;
      $scope.$apply($scope.step = 4);
    }

    r.readAsDataURL(f);
}
}]);