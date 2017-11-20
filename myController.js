var app = angular.module("myAlignmentTutor", []); 
app.controller("scoring", function($scope) {
    $scope.matrices = [{name: "Manual", id:1, ischecked:false}, {name: "Blossom5", id:2, ischecked:false}, {name: "Pam10", id:3, ischecked:false}];
    //$scope.selctedVal = "Manual";
    
    	
   	//$scope.$watch('selctedVal',function(newValue, oldValue, scope){
   	//	scope.setVal(val);
   	//});

    $scope.selectionChanged = function() {
     $scope.setVal($scope.selctedVal,$scope);

    
	}
	$scope.setVal = function(name,scope){
		for(var i=0;i<scope.matrices.length;i++){
			if(scope.matrices[i].name == name){
				scope.matrices[i].ischecked = true;
			}
			else{
				scope.matrices[i].ischecked = false;	
			}
		}
	}

	}	
);


app.controller("alignment", function($scope){
	$scope.alignments = [{"name": "Global", "id":1, "ischecked":"true"},{"name": "Local", "id":1, "ischecked":"false"}];
}



);