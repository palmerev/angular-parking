import angular from 'angular';

let parking = angular.module('parking', []);

parking.controller("parkingCtrl", function ($scope) {
  $scope.cars = [
    {plate: '32JR3'},
    {plate: '52HR4'},
    {plate: '78UI1'}
  ];
  $scope.park = function (car) {
    $scope.cars.push(angular.copy(car));
    delete $scope.car;
  };
});
