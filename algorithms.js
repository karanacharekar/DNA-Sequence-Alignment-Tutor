
var app = angular.module("myAlignmentTutor", []);

app.controller("matrix", function($scope,$rootScope,$http){
    console.log("hii");
    

    
    //VARIABLE DECLARAION

    $scope.sequence1 = "";
    $scope.sequence2 = "";
    $scope.alignment = "";
    $scope.matrixtype = "";
    $rootScope.gappenalty = 0;
    $scope.scorematrix = "";
    $scope.chars = "";

    // GET THE USER QUERY SEQUENCE AND CHOICES FROM DB

    userqueryfunc();

    function userqueryfunc(){        

        $http({
          method: 'GET',
          url: 'http://localhost:8080/api/GetUserQuery'
        }).then(function successCallback(response) {
            
           
            console.log(response);
            

            
            $scope.sequence1 = response.data.sequence1;
            $scope.sequence2 = response.data.sequence2;
            $scope.alignment = response.data.alignment;
            $scope.matrixtype = response.data.scorematrix;
            $rootScope.gappenalty = response.data.gap;
            scorematrixfunc();
          }, function errorCallback(response) {
            console.log('Error: ' + response);
        });
    }

     // GET THE REQUIRED SCORING MATRIX FROM DB

    function scorematrixfunc(){
        $http({
          method: 'GET',
          url: 'http://localhost:8080/api/ScoringMatrix',
          params: {name: $scope.matrixtype}
        }).then(function successCallback(response) {
            
            $scope.scorematrix = response.data.matrix;
            console.log($scope.scorematrix);
            $scope.chars = response.data.chars;
            
            
            initialize();

          }, function errorCallback(response) {
            console.log('Error: ' + response);
        });        
    }

    // DISPLAY USER SELECTED CHOICES IN LEFT WINDOW
    // DISPLAY USERS SELECTED SCORING MATRIX




    function initialize(){


        $scope.query = $scope.sequence1.split("")
        //$scope.query = ["a","t","g","c","a"]
        $scope.db = $scope.sequence2.split("")
        //$scope.db = ["a","a","t","g","c"]
        $scope.seq1 = $scope.sequence1
        $scope.seq2 = $scope.sequence2
        $scope.gappen = $rootScope.gappenalty
        $scope.aligntype = $scope.alignment
        $scope.scoringmatrix = "PAM50"
        $scope.matrixvals = $scope.scorematrix
        console.log($scope.matrixvals)
        $scope.matrixchar = $scope.chars.split("")
        $scope.count = 0;

        console.log("rchd here")
        alignment_result = global($scope.seq1,$scope.seq2,$scope.matrixvals,$scope.chars,$scope.gappen);
        console.log("returned")
        $rootScope.backtrack = alignment_result[1];
        //console.log(backtrack)
        $rootScope.result_matrix = alignment_result[0];
        total_cellstobe_filled = (($rootScope.result_matrix.length) * ($rootScope.result_matrix[0].length)) - 1

        //console.log(result_matrix)
    }

    

    function Valchecker(i,j,val){
        if($rootScope.result_matrix[i][j]==val){
            return true;
        }
        else{
            return false;
        }
    }

    
    //function to match user entered and actual values


      $scope.MainDpChecker = function(column,row,val,id){
        
        alert("row:"+row+" column:"+column+" val:" +val+" id:"+id );
        
        $scope.count - 0
        $rootScope.hidehint1 = true;
        $rootScope.hidehint2 = true;
        $rootScope.disablebacktrack = true;
        
        console.log(total_cellstobe_filled);

        //setAllFalse();
        //console.log(val);
        //$(this).css({"background-color":"green"});

        //$scope.query[row].color = true;
       // $scope.colr = red;

       if(Valchecker(row,column,val)){
            var x = document.getElementById(id);
            x.style.backgroundColor = "green";
            
            total_cellstobe_filled -= 1;
            $scope.hidehint1 = true;
            $scope.hidehint2 = true;
            if(total_cellstobe_filled==0){
                $scope.disablebacktrack = false;
            }
       }
       else{

            var x = document.getElementById(id);   // if a user changesa correct value to a wrong one
            x.style.backgroundColor = "red";

            $scope.count += 1;
            console.log($scope.count)
            if($scope.count == 1){
                document.getElementById("hint1").style.display = "block";
            }
            else if($scope.count==2){
                document.getElementById("hint1").style.display = "none";
                document.getElementById("hint2").style.display = "block";   
                $scope.hidehint1 = true;
                $scope.hidehint2 = false;

            }
            else if($scope.count==3){
                document.getElementById("hint2").style.display = "none";
                console.log($rootScope.result_matrix[row][column])

                $scope.hidehint1 = true;
                $scope.hidehint2 = true;

                document.getElementById(id).value = $rootScope.result_matrix[row][column];
                var x = document.getElementById(id);
                x.style.backgroundColor = "green";
                total_cellstobe_filled -= 1;
                $scope.count = 0;
            }
            else{

            }
       }
    } 
   

});



