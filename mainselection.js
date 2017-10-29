var app = angular.module("myAlignmentTutor", []); 
app.controller("mainselection", function($scope) {

	$scope.go = function ( path ) {
  $location.path( path );
};
});


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/algorithm", {
        templateUrl : "algorithm.htm"
    })
    .when("/tutorial", {
        templateUrl : "tutorial.htm"
    })
    
});

