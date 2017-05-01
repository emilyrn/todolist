var app = angular.module('toDoList', []);

app.controller('tehList', function($scope){

  $scope.List = [];

  $scope.addTask = function(newTask){
    console.log(newTask);
    $scope.List.push({name: newTask.name, duedate: newTask.due});
    console.log($scope.List)
  }
});
