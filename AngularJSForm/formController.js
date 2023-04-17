var formApp = angular.module('formApp', []);

formApp.controller('formController', function($scope) {
  $scope.submitForm = function() {
    if ($scope.myForm.$valid) {
      $scope.formSubmitted = true;
    }
  };
});
