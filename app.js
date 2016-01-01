var myApp = angular.module('myApp', []);
var host = "http://159.203.201.92";
var port = "80";
var domain = host + ":" + port;

myApp.controller('mainController', ['$scope', '$http', function ($scope, $http) 
    {
    $scope.newToDo = '';

    $http.get(domain + '/todos')
        .success(function (result) 
            {
            $scope.todos = result.data;
            console.log($scope.todos);
            })
        .error(function (data, status) 
            {
            console.log("Oops..." + data);
            });
    
    var newToDo = {
				title : 'First POST',
				body : 'I sent my first POST via AngularJS',
				done : 'true'
		};
        
    $scope.addToDo = function () 
        {
        $http.post(domain + '/todos', newToDo, JSON)
            .success(function (result) 
                {
                console.log("It works!  " + result);
                $scope.todos = result;
                $scope.newToDo = '';                
                })
            .error(function (data, status) 
                {
                console.log("Post oops..."  + data);
                });
        };
    }]);




