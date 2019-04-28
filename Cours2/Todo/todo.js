var TaskApp = angular.module('TaskApp', []);
TaskApp.controller('TaskCtrl', ['$scope', function($scope){
    
    $scope.checked = [];

    $scope.strike = {
        "text-decoration" : "line-through"
      }
    
    $scope.load = function() {
        $scope.counter=0;
        $scope.taskSet= [];
    }

    $scope.addTask = function (){
        $scope.taskSet[$scope.counter] = $scope.taskName;
        $scope.counter++;
        $scope.taskName ="";
    }

    $scope.removeTask = function (index){
        $scope.taskSet.splice(index, 1);
        $scope.checked.splice(index, 1);
        $scope.counter--;
    }

    $scope.Taskcompleted = function (index){
        console.log(index);
        if ($scope.checked[index]){
            return $scope.strike;
        } else {
            return "";
        };
    }

    $scope.load();
}]);