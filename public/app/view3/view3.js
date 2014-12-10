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

/************Get specifik Student*************/
        $http({
            method: 'GET',
            url: 'adminApi/getStudent/+username'
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


      //****************Server getPeriod  ****************//

        $http({
            method: 'GET',
            url: 'adminApi/getPeriod'
        }).
            success(function (data, status, headers, config) {
                $scope.foundPeriod = data;
                $scope.error = null;
            }).
            error(function (data, status, headers, config) {
                if(status == 401){
                    $scope.error ="You are not authenticated to request these data";
                    return;
                }
                $scope.error = data;

            });


        //****************Server getPeriodSSSS  ****************//

        $http({
            method: 'GET',
            url: 'adminApi/getPeriods'
        }).
            success(function (data, status, headers, config) {
                $scope.foundPeriods = data;
                $scope.error = null;
            }).
            error(function (data, status, headers, config) {
                if(status == 401){
                    $scope.error ="You are not authenticated to request these data";
                    return;
                }
                $scope.error = data;

            });

        /* ved ikke om dette er de rigtige Http handelers til at hente taks i momgoLab , men her er de Ihvertfald ! */
        $http({
            method: 'GET',
            url: 'adminApi/getTasks'
        }).
            success(function (data, status, headers, config) {
                $scope.foundTasks = data;
                /* OBS Navn på $Scope foundTasks !! */
                $scope.error = null;
            }).
            error(function (data, status, headers, config) {
                if(status == 401){
                    $scope.error ="You are not authenticated to request these data";
                    return;
                }
                $scope.error = data;

            });

        $http({
            method: 'GET',
            url: 'adminApi/getTaskById'
        }).
            success(function (data, status, headers, config) {
                $scope.foundTaskById = data;
                /* OBS Navn på $Scope foundTaskById !! */
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


