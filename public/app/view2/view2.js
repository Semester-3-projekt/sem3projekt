'use strict';

angular.module('myAppRename.view2', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'app/view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])


  .controller('View2Ctrl', ['$scope', '$http', function ($scope, $http) {
    $http({
      method: 'GET',
      //url: 'userApi/test'      // controller henter her 'userApi/test' i REST_user_api
      url: 'userApi/getTasks'
    })
      .success(function (data, status, headers, config) {
        //$scope.info = data;          //      her kommer data "info" ind fra  og Scopes til view2 html
        $scope.foundTasks = data;
        $scope.error = null;
      }).
      error(function (data, status, headers, config) {
        if (status == 401) {
          $scope.error = "You are not authenticated to request these data";
          return;
        }
        $scope.error = data;
      });



      $http({
        method: 'GET',
        url: 'userApi/getStudent'
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








  }]);