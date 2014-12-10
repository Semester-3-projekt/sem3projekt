'use strict';

angular.module('myAppRename.view2', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'app/view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])
    .controller('View2Ctrl', ['$scope', '$http', function ($scope, $http) {
      var studentId = $scope.username;

//-------------Get the student----------------------
      $http({
        method: 'GET',
        url: 'userApi/getStudent/'+studentId
      })
          .success(function(data){
            $scope.foundStudents = data;
            $scope.error = null;
          }).
          error(function(data, status) {
            if(status == 401){
              $scope.error = "You are not authenticated to request these data";
              return;
            }
            $scope.error = data;

          });
 //-----------Get the tasks----------------------------


      $http({
        method: 'GET',
        url: 'userApi/getTasks/'+studentId
    })
      .success(function (data, status, headers, config) {
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
        url: 'userApi/getClass/'+studentId
    })
        .success(function (data, status, headers, config) {
            $scope.foundClass = data;
            $scope.error = null;
        }).
        error(function (data, status, headers, config) {
            if (status == 401) {
                $scope.error = "You are not authenticated to request these data";
                return;
            }
            $scope.error = data;
        });

  }]);