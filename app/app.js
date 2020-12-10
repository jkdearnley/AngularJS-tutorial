var myCheeseApp = angular.module('myCheeseApp', []);

myCheeseApp.config(function(){

});

myCheeseApp.run(function(){

});

myCheeseApp.controller('CheeseController', ['$scope', function($scope){

    $scope.message= "Hey y'all";

    // $scope.cheeses = ['Brie', 'Camembert', 'Parmesan', 'Cheddar', 'Mozzarella'];
    $scope.cheeses = [
        {
            name: "Brie",
            firmness: "soft",
            taste: "medium",
            price: 7
        },
        {
            name: "Camembert",
            firmness: "soft",
            taste: "medium",
            price: 6.50
        },
        {
            name: "Cheddar",
            firmness: "firm",
            taste: "strong",
            price: 4
        },
        {
            name: "Parmesan",
            firmness: "hard",
            taste: "sharp",
            price: 10
        },
        {
            name: "Mozzarella",
            firmness: "soft",
            taste: "mild",
            price: 9
        }
    ]

}]);