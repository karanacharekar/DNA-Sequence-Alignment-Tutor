
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

    getuserqueryfunc();

    function getuserqueryfunc(){        

        $http({
          method: 'GET',
          url: 'http://localhost:8080/api/GetUserQuery'
        }).then(function successCallback(response) {
            
            console.log(response);
            $scope.sequence1 = response.data.sequence1;
            $scope.sequence2 = response.data.sequence2;
            $scope.alignment = response.data.alignmethod;
            $scope.matrixtype = response.data.matrixname;
            $rootScope.gappenalty = response.data.gap;
            $scope.scorematrix = response.data.scorematrix;

            console.log($scope.scorematrix);
            $scope.chars = response.data.letters;
            $rootScope.backtrack = response.data.allalignments;
            $rootScope.backtrackprint = $rootScope.backtrack.slice(1,$rootScope.backtrack.length)
            $scope.backtrackprintcount = $rootScope.backtrackprint.length
            console.log($rootScope.backtrack)
            $rootScope.result_matrix = response.data.dpmatrix;
            console.log("-----------------")
            console.log($rootScope.result_matrix)

            //scorematrixfunc();
            initialize();
          }, function errorCallback(response) {
            console.log('Error: ' + response);
        });
    }

     // GET THE REQUIRED SCORING MATRIX FROM DB
/*
    function scorematrixfunc(){
        $http({
          method: 'GET',
          url: 'http://localhost:8080/api/ScoringMatrix',
          params: {name: $scope.matrixtype}
        }).then(function successCallback(response) {
            console.log(response.data)
            $scope.scorematrix = response.data.matrix;
            console.log($scope.scorematrix);
            $scope.chars = response.data.char;
            
            
            initialize();

          }, function errorCallback(response) {
            console.log('Error: ' + response);
        });        
    }
*/
    // DISPLAY USER SELECTED CHOICES IN LEFT WINDOW
    // DISPLAY USERS SELECTED SCORING MATRIX


    function initialize(){


        $scope.db = $scope.sequence1.split("")
        //$scope.query = ["a","t","g","c","a"]
        $scope.query = $scope.sequence2.split("")
        //$scope.db = ["a","a","t","g","c"]
        $scope.seq1 = $scope.sequence1
        $scope.seq2 = $scope.sequence2
        $scope.prev_row = 0;
        $scope.prev_col = 0;
        $scope.gappen = $rootScope.gappenalty
        $scope.aligntype = $scope.alignment
        $scope.scoringmatrix = $scope.matrixtype
        $scope.matrixvals = $scope.scorematrix;
        console.log($scope.matrixvals)
        $scope.matrixchar = $scope.chars.split("")
        $scope.count = 0;
        $scope.btcount = 0;
        $scope.btclickcount = 0;
        console.log("rchd here")

        /*
        if($scope.aligntype.toLowerCase() == "global"){
            alignment_result = global($scope.seq1,$scope.seq2,$scope.matrixvals,$scope.chars,$scope.gappen);
        }
        else if($scope.aligntype.toLowerCase() == "local"){
            alignment_result = local($scope.seq1,$scope.seq2,$scope.matrixvals,$scope.chars,$scope.gappen);
        }*/

        console.log("returned")
        //$rootScope.backtrack = alignment_result[1];
        console.log($rootScope.backtrack)
        //$rootScope.result_matrix = alignment_result[0];
        //$scope.aligned_seq1 = alignment_result[2];
        //$scope.aligned_seq2 = alignment_result[3];
        $scope.aligned_s1="";
        $scope.aligned_s2="";
        //$scope.alignedseq_list = $scope.aligned_seq1.split("");
        $scope.total_cellstobe_filled = (($rootScope.result_matrix.length) * ($rootScope.result_matrix[0].length)) - 1
        $scope.total_btcellstobe_filled = $scope.backtrack.length;

        //console.log($scope.total_btcellstobe_filled)
    }

    

    function ValDpChecker(i,j,val){
        if($rootScope.result_matrix[i][j]==val){
            return true;
        }
        else{
            return false;
        }
    }

    
    //function to match user entered and actual values

    function AlignmentPrinter(row,col,id){
            if($scope.prev_row==0 && $scope.prev_col==0){
                    $scope.prev_row = row;
                    $scope.prev_col = col;

            }
            else{
                if(row == $scope.prev_row-1 && col == $scope.prev_col-1){
                    console.log("cur row "+row )
                    console.log("cur column "+col)
                    console.log("prev row "+$scope.prev_row)
                    console.log("prev column" +$scope.prev_col)
                    console.log($scope.query)
                    console.log($scope.db)
                    $scope.aligned_s1 = $scope.db[ $scope.prev_row-1] + $scope.aligned_s1  
                    $scope.aligned_s2 = $scope.query[ $scope.prev_col-1] + $scope.aligned_s2  
                    document.getElementById("s1"+id.toString()).value = $scope.db[ $scope.prev_row-1]
                    document.getElementById("s1"+id.toString()).readOnly = true; 
                    document.getElementById("d"+id.toString()).value = '|'
                    document.getElementById("d"+id.toString()).readOnly = true; 
                    document.getElementById("s2"+id.toString()).value = $scope.db[ $scope.prev_col-1]
                    document.getElementById("s2"+id.toString()).readOnly = true; 

                    $scope.prev_row = row;
                    $scope.prev_col = col;
                    console.log($scope.aligned_s1);
                    console.log($scope.aligned_s2);

                }
                else if(row ==  $scope.prev_row-1 && col == $scope.prev_col){
                    console.log("cur row "+row )
                    console.log("cur column "+col)
                    console.log("prev row "+$scope.prev_row)
                    console.log("prev column" +$scope.prev_col)
                    console.log($scope.query)
                    console.log($scope.db)
                    $scope.aligned_s2 = '-' + $scope.aligned_s2; 
                    $scope.aligned_s1 = $scope.db[$scope.prev_row-1] + $scope.aligned_s1 ;
                    document.getElementById("s1"+id.toString()).value = $scope.db[ $scope.prev_row-1]
                    document.getElementById("s1"+id.toString()).readOnly = true; 
                    document.getElementById("s2"+id.toString()).value = '-';
                    document.getElementById("s2"+id.toString()).readOnly = true; 
                    document.getElementById("d"+id.toString()).readOnly = true; 
                    $scope.prev_row = row;
                    $scope.prev_col = col;
                    console.log($scope.aligned_s1);
                    console.log($scope.aligned_s2);

                }
                else if(row == $scope.prev_row && col == $scope.prev_col-1){
                    console.log("cur row "+row )
                    console.log("cur column "+col)
                    console.log("prev row "+$scope.prev_row)
                    console.log("prev column" +$scope.prev_col)
                    console.log($scope.query)
                    console.log($scope.db)
                    $scope.aligned_s2 = $scope.query[$scope.prev_col-1] + $scope.aligned_s2 
                    $scope.aligned_s1 = '-' + $scope.aligned_s1; 
                    document.getElementById("s1"+id.toString()).value = '-';
                    document.getElementById("s1"+id.toString()).readOnly = true; 
                    document.getElementById("s2"+id.toString()).value = $scope.db[ $scope.prev_col-1];
                    document.getElementById("s2"+id.toString()).readOnly = true; 
                    document.getElementById("d"+id.toString()).readOnly = true; 
                    $scope.prev_row = row;
                    $scope.prev_col = col;
                    console.log($scope.aligned_s1);
                    console.log($scope.aligned_s2);
                }
            }    
      }  


      $scope.Backtrackclick = function(column,row,val,id){
        console.log("backkkkk")
        if($scope.total_cellstobe_filled<=0){
            console.log("yesssssssssssss")
            console.log("btclickcount"+ $scope.btclickcount)
            console.log("total_btcellstobe_filled"+$scope.total_btcellstobe_filled)
            if($scope.btclickcount < $scope.total_btcellstobe_filled){
                if(searchForArray($rootScope.backtrack[$scope.btclickcount],[row,column]) != -1 ){
                        console.log("entry found")
                        var x = document.getElementById(id);
                        x.style.backgroundColor = "purple";
                        $scope.btclickcount += 1;
                        AlignmentPrinter(row,column,$scope.backtrackprintcount);
                        $scope.backtrackprintcount -= 1;
                }    
            }
            

        } 
      }


      function enable(){
        console.log($rootScope.result_matrix)
        for(var i=0;i< $rootScope.result_matrix.length;i++){
            for(var j=0;j< $rootScope.result_matrix[0].length;j++){
                id = i.toString() + j.toString()
                console.log(id)
                document.getElementById(id).disabled = false;
            }
        }

      }



      $scope.MainBacktrackChecker = function(ind,val,id){
           //console.log($rootScope.backtrack) 
           var row = $rootScope.backtrack[ind][0][0]
           var col = $rootScope.backtrack[ind][0][1]
           //console.log(row+","+col)

           //console.log($rootScope.backtrack[col])
           if(ValBacktrackChecker(row,col,val)){
                var x = document.getElementById(id);
                x.style.backgroundColor = "#70db70";
                $scope.total_btcellstobe_filled -= 1;

                if($scope.total_btcellstobe_filled==0){
               document.getElementById("Seq1").style.display = "block";
               document.getElementById("dash").style.display = "block";
               document.getElementById("Seq2").style.display = "block";
               document.getElementById("bttitle").style.display = "block";
               enable();
            }
           }
           else{

           } 
      }



      function searchForArray(haystack, needle){
         console.log("searching")
         console.log(haystack)
         console.log(needle)
          var i, j, current;
          for(i = 0; i < haystack.length; ++i){
            if(needle.length === haystack[i].length){
              current = haystack[i];
              for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
              if(j === needle.length)
                return i;
            }
          }
          return -1;
        }  


 





      function ValBacktrackChecker(row,col,val){
          if($rootScope.result_matrix[row][col]==val){
            //console.log($rootScope.backtrack[col])
            return true;
          }          
          else{
            return false;
          }
      }


      $scope.MainDpChecker = function(column,row,val,id){
        
        //alert("row:"+row+" column:"+column+" val:" +val+" id:"+id );
        
        //$scope.count = 0
        $rootScope.hidehint1 = true;
        $rootScope.hidehint2 = true;
        //$rootScope.disablebacktrack = true;
        
        console.log($scope.total_cellstobe_filled);

    

       if(ValDpChecker(row,column,val)){
            var x = document.getElementById(id);
            x.style.backgroundColor = "#70db70";
            //document.getElementById(id).readOnly = true; 
            $scope.count = 0;
            document.getElementById("hint1").style.display = "none";
            document.getElementById("hint2").style.display = "none";
            document.getElementById(id).disabled = true;
            $scope.total_cellstobe_filled -= 1;
            $scope.hidehint1 = true;
            $scope.hidehint2 = true;
            if($scope.total_cellstobe_filled==0){
              document.getElementById("Seq1").style.display = "block";
              document.getElementById("dash").style.display = "block";
              document.getElementById("Seq2").style.display = "block";
              document.getElementById("bttitle").style.display = "block";
              enable();
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
                document.getElementById("hint1").style.display = "none";
                document.getElementById("hint2").style.display = "none";
                console.log($rootScope.result_matrix[row][column])

                $scope.hidehint1 = true;
                $scope.hidehint2 = true;

                document.getElementById(id).value = $rootScope.result_matrix[row][column];
                var x = document.getElementById(id);
                x.style.backgroundColor = "#70db70";
                document.getElementById(id).disabled = true;
                $scope.count = 0;
                //$scope.total_cellstobe_filled -= 1;
                
            }
            else{

            }
       }
    } 
   

});



