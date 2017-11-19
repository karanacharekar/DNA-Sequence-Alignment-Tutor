var app = angular.module("initapp", []);


app.controller("initctrl", function($scope){
	$scope.matrix1 = ["submat1" , "submat2"];
	$scope.matrix2 = ["PAM250" , "BLOSUM62" , "BLOSUM90"];
	$scope.rownum = '0';
	$scope.colnum = '0';

	$scope.matrixtype = "Nucleotides";

	$scope.$watch('matrixtype', function() {
		if($scope.matrixtype == "Nucleotides"){
			$scope.matrix = $scope.matrix1;
			$scope.rownum = [0,1,2,3];
			$scope.colnum = [0,1,2,3];
		}
		else{
			$scope.matrix = $scope.matrix2;
			$scope.rownum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
			$scope.colnum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
		}
    });
	
	$scope.items = [];
  	$scope.newitem = '';

  	$scope.alignmethod = "global";
  	
	$scope.add = function(){
    	$scope.items.push($scope.newitem);
    	$('#add').attr('disabled',true);
  	}

  	$scope.del = function(i){
    	$scope.items.splice(i,1);
    	$('#add').attr('disabled',false);
    	$scope.parentObj.matname="";
    	$scope.parentObj.matrixadd=[];
    }

  	$scope.parentObj = {matname:''};
  	$scope.insert = function($valid,i){
  		console.log($valid);
  	}        

	$scope.getNumber = function(num) {
    	return new Array(num);   
	}

});