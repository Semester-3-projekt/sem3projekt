'use strict';

angular.module('myAppRename.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'app/view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function ($scope, $http) {



        $http({
        method: 'GET',
        url: 'adminApi/getStudents'
      }).
          success(function(data, status, header, config){
            $scope.foundStudents = data;
            $scope.error = null;
          }).
          error(function(data, status, headers,config) {
            if(status == 401){
            $scope.error = "You are not authenticated to request these data";
              return;
          }
            $scope.error = data;

          });





      $http({
        method: 'GET',
        url: 'adminApi/classes'
      }).
          success(function (data, status, headers, config) {
            $scope.foundClasses = data;
            $scope.error = null;
          }).
          error(function (data, status, headers, config) {
            if(status == 401){
              $scope.error ="You are not authenticated to request these data";
              return;
            }
            $scope.error = data;

          });




    });

/// ny controller til Post new student !!??


