import angular from 'angular';

const parking = angular.module('parking', []);

parking.controller('parkingCtrl', function parkingCtrl($scope) {
  $scope.appTitle = 'Parki-ng';
  $scope.showAlert = true;
  $scope.alertTopic = 'Something went WRONG!';
  $scope.alertDescription = 'You must give the license plate number and color of the car';
  $scope.closeAlert = function () {
    $scope.showAlert = false;
  }
  $scope.colors = ['Black', 'Blue', 'Red', 'Silver'];
  $scope.cars = [
    { plate: '32JR3', dateParked: new Date(), color: 'Blue' },
    { plate: '52HR4', dateParked: new Date(), color: 'Red' },
    { plate: '78UI1', dateParked: new Date(), color: 'Black' }
  ];
  $scope.park = function (car) {
    car.dateParked = new Date();
    $scope.cars.push(car);
    delete $scope.car;
  };
});

parking.directive("alert", function () {
  return {
    templateUrl: 'alert.html',
    replace: true,
    transclude: true,
    restrict: 'E',
    scope: {
      topic: '@topic',
      close: '&close'
    }
  };
});
