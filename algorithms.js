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
        "r"
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


    $scope.seq1 = $scope.query.join("");
    $scope.seq2 = $scope.db.join("");
    $scope.gappen = -3
    
    $scope.aligntype = "Local Alignment"
    $scope.scoringmatrix = "PAM50"
    
    if($scope.scoringmatrix == "PAM50"){
        $scope.matrixvals = [[0,1,2,3,5],[4,2,5,6,7],[8,7,9,5,4],[3,1,6,7,8],[2,3,1,3,4]];
        $scope.matrixchar = ["a","t","g","c","u"];}
    else if($scope.scoringmatrix == "BLOSSUM"){
        $scope.matrixvals = [[0,1,2,3,5],[4,2,4,6,7],[8,1,9,5,4],[10,1,6,7,8],[2,3,4,1,6]];
        $scope.matrixchar = ["a","t","g","c","u"];
    }









    function Valchecker(val,i,j, backtrack){
        

    }








    
   

    
    $scope.valCheck = function (row,column,val,id) {
        
        alert("Row index is: " + id);
        //setAllFalse();
        //console.log(val);
        //$(this).css({"background-color":"green"});

        //$scope.query[row].color = true;
       // $scope.colr = red; jk';iuiiuoiuuuuu

    } 
    function setAllFalse(){
        for(var i=0;i<$scope.query;i++){
            $scope.query.color = false;
        }
    }
});


app.controller("matrix_validity", function($scope,$http) {

        $http.get('/api/ScoringMatrix?name='+$rootScope.matrixname)
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    });