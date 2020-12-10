var myCheeseApp = angular.module('myCheeseApp', []);

myCheeseApp.config(function(){

});

myCheeseApp.run(function(){

});

myCheeseApp.controller('CheeseController', function($scope){

    $scope.message= "Hey y'all";

    $scope.cheeses = ['Brie', 'Camembert', 'Parmesan', 'Cheddar', 'Mozzarella'];

});