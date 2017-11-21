var app = angular.module("myAlignmentTutor", []);

app.controller("matrix", function($scope,$http) {
   
    alert("pam");

    $scope.scoringmatrix = "PAM50"
    //VARIABLE DECLARAION

    $scope.sequence1 = "";
    $scope.sequence2 = "";
    $scope.alignment = "";
    $scope.matrixtype = "";
    $rootScope.gappenalty = 0;
    $scope.scorematrix = d"";
    $scope.chars = "";

    // GET THE USER QUERY SEQUENCE AND CHOICES FROM DB

    userqueryfunc();

    function userqueryfunc(){
    $http.get('/api/GetUserQuery')
        .success(function(data) {
            data = data.toString();
            $scope.todos = data;
            console.log(data);
            alert(data);
            alert($scope.todos);
            $scope.sequence1 = data.sequence1;
            $scope.sequence2 = data.sequence2;
            $scope.alignment = data.alignment;
            $scope.matrixtype = data.scorematrix;
            $rootScope.gappenalty = data.gap;

            scorematrixfunc();
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    }

     // GET THE REQUIRED SCORING MATRIX FROM DB

    function scorematrixfunc(){
    $http.get('/api/ScoringMatrix?name='+$scope.matrixtype)
        .success(function(data) {
            $scope.scorematrix = data.matrix;
            $scope.chars = data.chars;

            console.log(data);
            alert(data);
            initialize();
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    }


    // DISPLAY USER SELECTED CHOICES IN LEFT WINDOW
    // DISPLAY USERS SELECTED SCORING MATRIX

    function initialize(){

        $scope.query = $scope.sequence1.split("")
        $scope.db = $scope.sequence2.split("")
        $scope.seq1 = $scope.sequence1
        $scope.seq2 = $scope.sequence2
        $scope.gappen = $rootScope.gappenalty
        $scope.aligntype = $scope.alignment
        $scope.scoringmatrix = "PAM50"
        $scope.matrixvals = $scope.scorematrix
        $scope.matrixchar = $scope.chars.split("")
    }

    

    
    //function to match user entered and actual values

    
    function Valchecker(val,i,j){
        if($rootScope.result_matrix[i][j] == val){
                return true;
            }
        else{
            return false
        }
    }



    // function to check users input in a step by step manner    

    
    $scope.MainCheck = function (column,row,val) {
        
        alert("row:"+row+" column:"+column+" val:" +val );
        var count = 0;
        $scope.hidehint1 = true;
        $scope.hidehint2 = true;
        //setAllFalse();
        //console.log(val);
        //$(this).css({"background-color":"green"});

        //$scope.query[row].color = true;
       // $scope.colr = red;

       if Valchecker(row,column,val){
            var x = document.getElementById($scope.id)
            x.style.backgroundColor = "green";
            count = 0;
            $scope.hidehint1 = true;
            $scope.hidehint2 = true;
       }
       else{
            count += 1;
            if(count == 1){
                $scope.hidehint1 = false;
                $scope.hidehint2 = true;
            }
            else if(count==2){
                
                $scope.hidehint1 = true;
                $scope.hidehint2 = false;

            }
            else if(count==3){
                $scope.hidehint1 = true;
                $scope.hidehint2 = true;
                document.getElementById(id).innerHTML = $rootScope.result_matrix[row][column];
            }
       }
    } 


});


