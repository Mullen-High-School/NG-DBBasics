var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function ($scope, $http) 
    {
    $scope.newToDo = '';

    $http.get('http://159.203.201.92/todos')
        .success(function (result) 
            {
            $scope.todos = result;
            console.log($scope.todos);
            })
        .error(function (data, status) 
            {
            console.log("Oops..." + data);
            });
    
    $scope.newToDo = '';
    $scope.addToDo = function () 
        {
        $http.post('http://159.203.201.92/todos', { newToDo: $scope.newToDo })
            .success(function (result) 
                {
                console.log(result);
                $scope.todos = result;
                $scope.newToDo = '';                
                })
            .error(function (data, status) 
                {
                console.log(data);
                });
        };
    }]);

