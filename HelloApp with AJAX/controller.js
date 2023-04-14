var helloApp = angular.module('helloApp', []);

helloApp.controller('helloController', function($scope) {
  $scope.message = 'Hello, world!';
});
