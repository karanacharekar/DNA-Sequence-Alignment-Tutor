var app = angular.module("myAlignmentTutor", ["ngRoute"]); 

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "mainpage.html"
    })
    .when("/algorithms", {
        templateUrl : "algorithms.html"
    })
    .when("/tutorials", {
        templateUrl : "tutorialpage.html"
    })
    
});

app.controller("mainselection", function($scope,$location) {

	$scope.go = function ( path ) {
  $location.path( path );
  console.log(path);
};
});



