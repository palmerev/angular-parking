import angular from 'angular';

let parking = angular.module('parking', []);

parking.controller('parkingCtrl', function ($scope) {
  $scope.appTitle = 'Parki-ng'
  $scope.cars = [
    {plate: '32JR3', dateParked: new Date()},
    {plate: '52HR4', dateParked: new Date()},
    {plate: '78UI1', dateParked: new Date()}
  ];
  $scope.park = function (car) {
    car.dateParked = new Date();
    $scope.cars.push(car);
    delete $scope.car;
  };
});
