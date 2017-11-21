var app = angular.module("initapp", []);


app.controller("initctrl", function($scope , $http){

	$scope.matrixtype = "Nucleotides";
	var regexn = /[acgt][acgt][acgt][acgt]*/i;
	var regexp = /[arndceqghilkmfpstwyv][arndceqghilkmfpstwyv][arndceqghilkmfpstwyv][arndceqghilkmfpstwyv]*/i;

	var myObj = {"submatrixN":[["submat1" , [[1,-1,-1,-1] ,[-1,1,-1,-1],[-1,-1,1,-1],[-1,-1,-1,1]] ] ,["submat2" , [[1,-3,-3,-3] ,[-3,1,-3,-3],[-3,-3,1,-3],[-3,-3,-3,1]] ]], "submatrixP":[[ "PAM250" , [[13,6,9,9,5,8,9,12,6,8,6,7,7,4,11,11,11,2,4,9],[3,17,4,3,2,5,3,2,6,3,2,9,4,1,4,4,3,7,2,2],[4,4,6,7,2,5,6,4,6,3,2,5,3,2,4,5,4,2,3,3],[5,4,8,11,1,7,10,5,6,3,2,5,3,1,4,5,5,1,2,3],[2,1,1,1,52,1,1,2,2,2,1,1,1,1,2,3,2,1,4,2],[3,5,5,6,1,10,7,3,7,2,3,5,3,1,4,3,3,1,2,3],[5,4,7,11,1,9,12,5,6,3,2,5,3,1,4,5,5,1,2,3],[12,5,10,10,4,7,9,27,5,5,4,6,5,3,8,11,9,2,3,7],[2,5,5,4,2,7,4,2,15,2,2,3,2,2,3,3,2,2,3,2],[3,2,2,2,2,2,2,2,2,10,6,2,6,5,2,3,4,1,3,9],[6,4,4,3,2,6,4,3,5,15,34,4,20,13,5,4,6,6,7,13],[6,18,10,8,2,10,8,5,8,5,4,24,9,2,6,8,8,4,3,5],[1,1,1,1,0,1,1,1,1,2,3,2,6,2,1,1,1,1,1,2],[2,1,2,1,1,1,1,1,3,5,6,1,4,32,1,2,2,4,20,3],[7,5,5,4,3,5,4,5,5,3,3,4,3,2,20,6,5,1,2,4],[9,6,8,7,7,6,7,9,6,5,4,7,5,3,9,10,9,4,4,6],[8,5,6,6,4,5,5,6,4,6,4,6,5,3,6,8,11,2,3,6],[0,2,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,55,1,0],[1,1,2,1,3,1,1,1,3,2,2,1,2,15,1,2,2,3,31,2],[7,4,4,4,4,4,4,4,5,4,15,10,4,10,5,5,5,72,4,17]]] ,["BLOSUM45" ,[[-2,-1,-2,-1,-1,-1,0,-2,-1,-1,-1,-1,-2,-1,1,0,-2,-2,0],[-2,7,0,-1,-3,1,0,-2,0,-3,-2,3,-1,-2,-2,-1,-1,-2,-1,-2],[-1,0,6,2,-2,0,0,0,1,-2,-3,0,-2,-2,-2,1,0,-4,-2,-3],[-2,-1,2,7,-3,0,2,-1,0,-4,-3,0,-3,-4,-1,0,-1,-4,-2,-3],[-1,-3,-2,-3,12,-3,-3,-3,-3,-3,-2,-3,-2,-2,-4,-1,-1,-5,-3,-1],[-1,1,0,0,-3,6,2,-2,1,-2,-2,1,0,-4,-1,0,-1,-2,-1,-3],[-1,0,0,2,-3,2,6,-2,0,-3,-2,1,-2,-3,0,0,-1,-3,-2,-3],[0,-2,0,-1,-3,-2,-2,7,-2,-4,-3,-2,-2,-3,-2,0,-2,-2,-3,-3],[-2,0,1,0,-3,1,0,-2,10,-3,-2,-1,0,-2,-2,-1,-2,-3,2,-3],[-1,-3,-2,-4,-3,-2,-3,-4,-3,5,2,-3,2,0,-2,-2,-1,-2,0,3],[-1,-2,-3,-3,-2,-2,-2,-3,-2,2,5,-3,2,1,-3,-3,-1,-2,0,1],[-1,3,0,0,-3,1,1,-2,-1,-3,-3,5,-1,-3,-1,-1,-1,-2,-1,-2],[-1,-1,-2,-3,-2,0,-2,-2,0,2,2,-1,6,0,-2,-2,-1,-2,0,1],[-2,-2,-2,-4,-2,-4,-3,-3,-2,0,1,-3,0,8,-3,-2,-1,1,3,0],[-1,-2,-2,-1,-4,-1,0,-2,-2,-2,-3,-1,-2,-3,9,-1,-1,-3,-3,-3],[1,-1,1,0,-1,0,0,0,-1,-2,-3,-1,-2,-2,-1,4,2,-4,-2,-1],[0,-1,0,-1,-1,-1,-1,-2,-2,-1,-1,-1,-1,-1,-1,2,5,-3,-1,0],[-2,-2,-4,-4,-5,-2,-3,-2,-3,-2,-2,-2,-2,1,-3,-4,-3,15,3,-3],[-2,-1,-2,-2,-3,-1,-2,-3,2,0,0,-1,0,3,-3,-2,-1,3,8,-1],[0,-2,-3,-3,-1,-3,-3,-3,-3,3,1,-2,1,0,-3,-1,0,-3,-1,5]]] ,[ "BLOSUM62" , [[4,-1,-2,-2,0,-1,-1,0,-2,-1,-1,-1,-1,-2,-1,1,0,-3,-2,0],[-1,5,0,-2,-3,1,0,-2,0,-3,-2,2,-1,-3,-2,-1,-1,-3,-2,-3],[-2,0,6,1,-3,0,0,0,1,-3,-3,0,-2,-3,-2,1,0,-4,-2,-3],[-2,-2,1,6,-3,0,2,-1,-1,-3,-4,-1,-3,-3,-1,0,-1,-4,-3,-3],[0,-3,-3,-3,9,-3,-4,-3,-3,-1,-1,-3,-1,-2,-3,-1,-1,-2,-2,-1],[-1,1,0,0,-3,5,2,-2,0,-3,-2,1,0,-3,-1,0,-1,-2,-1,-2],[-1,0,0,2,-4,2,5,-2,0,-3,-3,1,-2,-3,-1,0,-1,-3,-2,-2],[0,-2,0,-1,-3,-2,-2,6,-2,-4,-4,-2,-3,-3,-2,0,-2,-2,-3,-3],[-2,0,1,-1,-3,0,0,-2,8,-3,-3,-1,-2,-1,-2,-1,-2,-2,2,-3],[-1,-3,-3,-3,-1,-3,-3,-4,-3,4,2,-3,1,0,-3,-2,-1,-3,-1,3],[-1,-2,-3,-4,-1,-2,-3,-4,-3,2,4,-2,2,0,-3,-2,-1,-2,-1,1],[-1,2,0,-1,-3,1,1,-2,-1,-3,-2,5,-1,-3,-1,0,-1,-3,-2,-2],[-1,-1,-2,-3,-1,0,-2,-3,-2,1,2,-1,5,0,-2,-1,-1,-1,-1,1],[-2,-3,-3,-3,-2,-3,-3,-3,-1,0,0,-3,0,6,-4,-2,-2,1,3,-1],[-1,-2,-2,-1,-3,-1,-1,-2,-2,-3,-3,-1,-2,-4,7,-1,-1,-4,-3,-2],[1,-1,1,0,-1,0,0,0,-1,-2,-2,0,-1,-2,-1,4,1,-3,-2,-2],[0,-1,0,-1,-1,-1,-1,-2,-2,-1,-1,-1,-1,-2,-1,1,5,-2,-2,0],[-3,-3,-4,-4,-2,-2,-3,-2,-2,-3,-2,-3,-1,1,-4,-3,-2,11,2,-3],[-2,-2,-2,-3,-2,-1,-2,-3,2,-1,-1,-2,-1,3,-3,-2,-2,2,7,-1],[0,-3,-3,-3,-1,-2,-2,-3,-3,3,1,-2,1,-1,-2,-2,0,-3,-1,4]] ] ]};

	//var myJSON = JSON.stringify(myObj);
	//localStorage.setItem("submatJSON", myJSON);

	var smtext = localStorage.getItem("submatJSON");
	var smobj = JSON.parse(smtext);
	var str = JSON.stringify(smobj);

	console.log(str);

	$scope.submatrixN = [];
	$scope.submatrixP = [];

	for(var i=0;i<smobj.submatrixN.length;i++){
		$scope.submatrixN.push(smobj.submatrixN[i][0]);
	}

	for(var i=0;i<smobj.submatrixP.length;i++){
		$scope.submatrixP.push(smobj.submatrixP[i][0]);
	}

	$scope.selmatrix = [];

	$scope.$watch('matrixtype', function(){
			if($scope.matrixtype == "Nucleotides"){
				$scope.selmatrix = $scope.submatrixN;
				$scope.regex = regexn;
			}
			else{
				$scope.selmatrix = $scope.submatrixP;
				$scope.regex = regexp;
			}

			console.log($scope.regex);
		});

	$scope.matrix = [];
	$scope.matrixname = "";

	$scope.$watch('matrixname', function(){
		if($scope.matrixname != ""){
			
  			var mattype = null;

  			if($scope.matrixtype == "Nucleotides")
  				mattype = smobj.submatrixN;
  			else
  				mattype = smobj.submatrixP;

  			for(var i=0;i<mattype.length;i++){
  				if($scope.matrixname == mattype[i][0])
  					$scope.matrix = mattype[i][1];
  			}

  			console.log($scope.matrix[0][0]);
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
    	$scope.parentObj.match="";
    	$scope.parentObj.mismatch="";
    }


  	$scope.parentObj = {matname:'' , match:'' , mismatch:''};
  	$scope.instatus = false;
  	$scope.inmessage = "";

  	$scope.insert = function(oindex){
  		var tempmat = []; 
  		var n = 0;
  		var temparr =  [];
  		temparr.push($scope.parentObj.matname);

  		if($scope.matrixtype == "Nucleotides"){
  			smobj.submatrixN.push(temparr);
  			n=4;
  		}
  		else{
  			smobj.submatrixN.push(temparr);
  			n=20;
  		}

  		for(var i=0;i<n;i++){
  				var temp = [];
  				for(var j=0;j<n;j++){
  					if(i == j)
  						temp.push($scope.parentObj.match);
  					else
  						temp.push($scope.parentObj.mismatch);
  				}
  				tempmat.push(temp);
  			}

  		var ind = 0;

  			if($scope.matrixtype == "Nucleotides"){
  				ind = smobj.submatrixN.length - 1;
  				smobj.submatrixN[ind].push(tempmat);
  			}
  			else{
  				ind = smobj.submatrixP.length - 1;
  				$scope.submatrixP.push(tempmat);
  			}
  			
  		console.log(smobj.submatrixN[ind][0][0]);

  		var myJSON = JSON.stringify(smobj);
		localStorage.setItem("submatJSON", myJSON);

  		$scope.del(oindex);
  		$scope.inmessage = "Inserted matrix successfully";
  		$scope.instatus = true;
  	}        

  	$scope.closeAlert = function(){
  		$scope.instatus = false;
  	}
	

  	$scope.initialize = function(){
  		//create JSON and invoke nodeJS
  		
  		var data =  {
                "sequence1": $scope.seq1,
                "sequence2": $scope.seq2,
                "alignment": $scope.alignmethod,
                "scorematrix": $scope.matrix,
                "gap": $scope.gap,
            };
        
            var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            }

        console.log(data);
        
            $http.post('http://127.0.0.1:3000/', data, config)
            .then(function (data, status, headers, config) {
              console.log('success');
                $scope.PostDataResponse = data;
            },function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });	
  	}

});