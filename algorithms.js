var app = angular.module("myAlignmentTutor", []);
app.controller("matrix", function($scope) {
    $scope.query = [
        "a",
        "c",
        "g",
        "t",
        "e",
        "f",
        "l",
        "r",
    ]

    $scope.db = [
        "a",
        "c",
        "g",
        "t",
        "y",
        "u",
        "i"
    ]

    $scope.myFunction = function (x) {
        alert("Row index is: " + x.rowIndex);
    } 

});