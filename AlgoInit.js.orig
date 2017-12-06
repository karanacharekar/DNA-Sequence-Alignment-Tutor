var app = angular.module("initapp", []);


app.controller("initctrl", function($scope , $http , $window){

	$scope.matrixtype = "Nucleotides";
	var regexn = /[acgt][acgt][acgt][acgt]*/i;
	var regexp = /[arndceqghilkmfpstwyv][arndceqghilkmfpstwyv][arndceqghilkmfpstwyv][arndceqghilkmfpstwyv]*/i;

	/*var myObj = {"submatrixN":[["submat1" , [[1,-1,-1,-1] ,[-1,1,-1,-1],[-1,-1,1,-1],[-1,-1,-1,1]] ] ,["submat2" , [[1,-3,-3,-3] ,[-3,1,-3,-3],[-3,-3,1,-3],[-3,-3,-3,1]] ]], "submatrixP":[[ "PAM250" , [[13,6,9,9,5,8,9,12,6,8,6,7,7,4,11,11,11,2,4,9],[3,17,4,3,2,5,3,2,6,3,2,9,4,1,4,4,3,7,2,2],[4,4,6,7,2,5,6,4,6,3,2,5,3,2,4,5,4,2,3,3],[5,4,8,11,1,7,10,5,6,3,2,5,3,1,4,5,5,1,2,3],[2,1,1,1,52,1,1,2,2,2,1,1,1,1,2,3,2,1,4,2],[3,5,5,6,1,10,7,3,7,2,3,5,3,1,4,3,3,1,2,3],[5,4,7,11,1,9,12,5,6,3,2,5,3,1,4,5,5,1,2,3],[12,5,10,10,4,7,9,27,5,5,4,6,5,3,8,11,9,2,3,7],[2,5,5,4,2,7,4,2,15,2,2,3,2,2,3,3,2,2,3,2],[3,2,2,2,2,2,2,2,2,10,6,2,6,5,2,3,4,1,3,9],[6,4,4,3,2,6,4,3,5,15,34,4,20,13,5,4,6,6,7,13],[6,18,10,8,2,10,8,5,8,5,4,24,9,2,6,8,8,4,3,5],[1,1,1,1,0,1,1,1,1,2,3,2,6,2,1,1,1,1,1,2],[2,1,2,1,1,1,1,1,3,5,6,1,4,32,1,2,2,4,20,3],[7,5,5,4,3,5,4,5,5,3,3,4,3,2,20,6,5,1,2,4],[9,6,8,7,7,6,7,9,6,5,4,7,5,3,9,10,9,4,4,6],[8,5,6,6,4,5,5,6,4,6,4,6,5,3,6,8,11,2,3,6],[0,2,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,55,1,0],[1,1,2,1,3,1,1,1,3,2,2,1,2,15,1,2,2,3,31,2],[7,4,4,4,4,4,4,4,5,4,15,10,4,10,5,5,5,72,4,17]]] ,["BLOSUM45" ,[[-2,-1,-2,-1,-1,-1,0,-2,-1,-1,-1,-1,-2,-1,1,0,-2,-2,0],[-2,7,0,-1,-3,1,0,-2,0,-3,-2,3,-1,-2,-2,-1,-1,-2,-1,-2],[-1,0,6,2,-2,0,0,0,1,-2,-3,0,-2,-2,-2,1,0,-4,-2,-3],[-2,-1,2,7,-3,0,2,-1,0,-4,-3,0,-3,-4,-1,0,-1,-4,-2,-3],[-1,-3,-2,-3,12,-3,-3,-3,-3,-3,-2,-3,-2,-2,-4,-1,-1,-5,-3,-1],[-1,1,0,0,-3,6,2,-2,1,-2,-2,1,0,-4,-1,0,-1,-2,-1,-3],[-1,0,0,2,-3,2,6,-2,0,-3,-2,1,-2,-3,0,0,-1,-3,-2,-3],[0,-2,0,-1,-3,-2,-2,7,-2,-4,-3,-2,-2,-3,-2,0,-2,-2,-3,-3],[-2,0,1,0,-3,1,0,-2,10,-3,-2,-1,0,-2,-2,-1,-2,-3,2,-3],[-1,-3,-2,-4,-3,-2,-3,-4,-3,5,2,-3,2,0,-2,-2,-1,-2,0,3],[-1,-2,-3,-3,-2,-2,-2,-3,-2,2,5,-3,2,1,-3,-3,-1,-2,0,1],[-1,3,0,0,-3,1,1,-2,-1,-3,-3,5,-1,-3,-1,-1,-1,-2,-1,-2],[-1,-1,-2,-3,-2,0,-2,-2,0,2,2,-1,6,0,-2,-2,-1,-2,0,1],[-2,-2,-2,-4,-2,-4,-3,-3,-2,0,1,-3,0,8,-3,-2,-1,1,3,0],[-1,-2,-2,-1,-4,-1,0,-2,-2,-2,-3,-1,-2,-3,9,-1,-1,-3,-3,-3],[1,-1,1,0,-1,0,0,0,-1,-2,-3,-1,-2,-2,-1,4,2,-4,-2,-1],[0,-1,0,-1,-1,-1,-1,-2,-2,-1,-1,-1,-1,-1,-1,2,5,-3,-1,0],[-2,-2,-4,-4,-5,-2,-3,-2,-3,-2,-2,-2,-2,1,-3,-4,-3,15,3,-3],[-2,-1,-2,-2,-3,-1,-2,-3,2,0,0,-1,0,3,-3,-2,-1,3,8,-1],[0,-2,-3,-3,-1,-3,-3,-3,-3,3,1,-2,1,0,-3,-1,0,-3,-1,5]]] ,[ "BLOSUM62" , [[4,-1,-2,-2,0,-1,-1,0,-2,-1,-1,-1,-1,-2,-1,1,0,-3,-2,0],[-1,5,0,-2,-3,1,0,-2,0,-3,-2,2,-1,-3,-2,-1,-1,-3,-2,-3],[-2,0,6,1,-3,0,0,0,1,-3,-3,0,-2,-3,-2,1,0,-4,-2,-3],[-2,-2,1,6,-3,0,2,-1,-1,-3,-4,-1,-3,-3,-1,0,-1,-4,-3,-3],[0,-3,-3,-3,9,-3,-4,-3,-3,-1,-1,-3,-1,-2,-3,-1,-1,-2,-2,-1],[-1,1,0,0,-3,5,2,-2,0,-3,-2,1,0,-3,-1,0,-1,-2,-1,-2],[-1,0,0,2,-4,2,5,-2,0,-3,-3,1,-2,-3,-1,0,-1,-3,-2,-2],[0,-2,0,-1,-3,-2,-2,6,-2,-4,-4,-2,-3,-3,-2,0,-2,-2,-3,-3],[-2,0,1,-1,-3,0,0,-2,8,-3,-3,-1,-2,-1,-2,-1,-2,-2,2,-3],[-1,-3,-3,-3,-1,-3,-3,-4,-3,4,2,-3,1,0,-3,-2,-1,-3,-1,3],[-1,-2,-3,-4,-1,-2,-3,-4,-3,2,4,-2,2,0,-3,-2,-1,-2,-1,1],[-1,2,0,-1,-3,1,1,-2,-1,-3,-2,5,-1,-3,-1,0,-1,-3,-2,-2],[-1,-1,-2,-3,-1,0,-2,-3,-2,1,2,-1,5,0,-2,-1,-1,-1,-1,1],[-2,-3,-3,-3,-2,-3,-3,-3,-1,0,0,-3,0,6,-4,-2,-2,1,3,-1],[-1,-2,-2,-1,-3,-1,-1,-2,-2,-3,-3,-1,-2,-4,7,-1,-1,-4,-3,-2],[1,-1,1,0,-1,0,0,0,-1,-2,-2,0,-1,-2,-1,4,1,-3,-2,-2],[0,-1,0,-1,-1,-1,-1,-2,-2,-1,-1,-1,-1,-2,-1,1,5,-2,-2,0],[-3,-3,-4,-4,-2,-2,-3,-2,-2,-3,-2,-3,-1,1,-4,-3,-2,11,2,-3],[-2,-2,-2,-3,-2,-1,-2,-3,2,-1,-1,-2,-1,3,-3,-2,-2,2,7,-1],[0,-3,-3,-3,-1,-2,-2,-3,-3,3,1,-2,1,-1,-2,-2,0,-3,-1,4]] ] ]};

	var myJSON = JSON.stringify(myObj);
	localStorage.setItem("submatJSON", myJSON);

	var smtext = localStorage.getItem("submatJSON");
	var smobj = JSON.parse(smtext);
	var str = JSON.stringify(smobj);*/

	//console.log(str);

      var smobj = {};
      
      /*var myJSON = JSON.stringify(smobj);
    localStorage.setItem("submatJSON", myJSON);*/

    $scope.submatrixN = [];
    $scope.submatrixP = [];
    $scope.selmatrix = [];

    function selectNMatrix(){
    var url1 = 'http://127.0.0.1:5555/api/getAllMatrices?matrixtype=' + 'Nucleotides';

    var selectreq = {
        method: 'GET',
        url: url1,
        headers: {
              'Content-Type': 'application/json',
              'Access-Control-Request-Headers' : '*'
        },
      }

      console.log(selectreq);

      var request = $http(selectreq)
        .then(function (response) {
            console.log('success');
            smobj = [];
            for(var i =0;i<response.data.length;i++){
              var temp1 = Object.keys(response.data[i])[1];
              var obj1 = {};
              obj1[temp1] = response.data[i][temp1];
              smobj.push(obj1);
            }
            localStorage.setItem("submatnJSON", JSON.stringify(smobj));
            /*var smtext1 = localStorage.getItem("submatnJSON");
            var objn = JSON.parse(smtext1);*/
             $scope.submatrixN = [];
            for(var i =0;i<smobj.length;i++){
              var str1 = Object.keys(smobj[i])[0];
              $scope.submatrixN.push(str1);
            }

            
          },function (response) {
             console.log('error');
          });

     /*var smtext1 = localStorage.getItem("submatnJSON");
    var objn = JSON.parse(smtext1);
    
    for(var i =0;i<objn.length;i++){
        var str1 = Object.keys(objn[i])[0];
        $scope.submatrixN.push(str1);
      }*/

    }

    selectNMatrix();

    function selectPMatrix(){

    var url1 = 'http://127.0.0.1:5555/api/getAllMatrices?matrixtype=' + 'AminoAcids';

    var selectreq = {
        method: 'GET',
        url: url1,
        headers: {
              'Content-Type': 'application/json',
              'Access-Control-Request-Headers' : '*'
        },
      }

      $http(selectreq)
        .then(function (response) {
            console.log('success');
            smobj = response.data;
            return response.data;
          },function (response) {
             console.log('error');
          });

        var request = $http(selectreq)
        .then(function (response) {
            console.log('success');
            smobj = [];
            for(var i =0;i<response.data.length;i++){
              var temp1 = Object.keys(response.data[i])[1];
              var obj1 = {};
              obj1[temp1] = response.data[i][temp1];
              smobj.push(obj1);
            }
            localStorage.setItem("submatpJSON", JSON.stringify(smobj));
            /*var smtext2 = localStorage.getItem("submatpJSON");
            var objp = JSON.parse(smtext2);*/
            $scope.submatrixP = [];
            for(var i =0;i<smobj.length;i++){
              var str2 = Object.keys(smobj[i])[0];
              $scope.submatrixP.push(str2);
            }

            
             
          },function (response) {
             console.log('error');
          });

    

   }

   selectPMatrix();
	

	$scope.$watch('matrixtype', function(){
			if($scope.matrixtype == "Nucleotides"){
        $scope.seltype = true;
				$scope.regex = regexn;
			}
			else{
				$scope.seltype = false;
				$scope.regex = regexp;
			}

			console.log($scope.regex);
		});

	$scope.matrix = [];
	$scope.matrixname = "";

	$scope.$watch('matrixname', function(){
		if($scope.matrixname != ""){
			
  			var mattype = null;
        var smtext = ''; 
        

  			if($scope.matrixtype == "Nucleotides")
          smtext = localStorage.getItem("submatnJSON");
  			else
  				smtext = localStorage.getItem("submatpJSON");

        var obj1 = JSON.parse(smtext);
        var obj2 = {};


        for(var i = 0;i<obj1.length;i++){
          var strtemp = Object.keys(obj1[i])[0];
          obj2[strtemp] = obj1[i][strtemp];
        }

        $scope.matrix = obj2[$scope.matrixname];
  			
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
    $scope.alignoutput = "";

  	$scope.insert = function(oindex){
  		var tempmat = []; 
  		var n = 0;
  		
  		if($scope.matrixtype == "Nucleotides"){
  			n=4;
  		}
  		else{
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

  		var matobj = {};
      matobj["matrixtype"] = $scope.matrixtype;
      matobj['matrixname'] = $scope.parentObj.matname;
  		matobj['matrixarray'] = tempmat;
  			
  		//console.log(matobj);

  		/*var myJSON = JSON.stringify(smobj);
		localStorage.setItem("submatJSON", myJSON);*/

    var matrixreq = {
        method: 'POST',
        url: 'http://127.0.0.1:8080/api/insertMatrix',
        headers: {
              'Content-Type': 'application/json',
              'Access-Control-Request-Headers' : '*'
        },
        data: matobj
      }

      console.log(matrixreq);

      $scope.inmessage = "";
      $scope.del(oindex);
      
      
      $http(matrixreq)
        .then(function (response) {
             $scope.inmessage = response['data'];
             $scope.instatus = true;
          if($scope.inmessage == "Inserted successfully!"){
             if($scope.matrixtype == "Nucleotides"){
                selectNMatrix();
            }else{
                selectPMatrix();
            }
             
          }
             console.log('success');
          },function (response) {
             console.log('error');
          }); 

      

  	}      

    $scope.$watch('inmessage' ,function(){
      if($scope.inmessage != ""){
        $scope.instatus = true;
      }
    });  

  	$scope.closeAlert = function(){
      $scope.inmessage = "";
  		$scope.instatus = false;
  	}
	

  	$scope.initialize = function(){
  		//create JSON and invoke nodeJS
  		var reqdata =  { "sequence1" : $scope.seq1,
      "sequence2" : $scope.seq2,      "scorematrix" : $scope.matrix,
      "aligntype" : $scope.matrixtype,
      "alignmethod" : $scope.alignmethod,
      "gap" : $scope.gap
    }
                
      console.log(reqdata)

      var req = {
        method: 'POST',
        url: 'http://127.0.0.1:3000/api/executeAlignment',
        headers: {
              'Content-Type': 'application/json',
              'Access-Control-Request-Headers' : '*'
        },
        data: reqdata
      }

      console.log(req);

      $http(req)
        .then(function (response) {
             console.log('success');
             $scope.alignoutput = JSON.stringify(response.data);
             console.log($scope.alignoutput);

             var finaljson = JSON.parse($scope.alignoutput);
            
            finaljson['sequence1'] = reqdata['sequence1'];
            finaljson['sequence2'] = reqdata['sequence2'];
            finaljson['aligntype'] = reqdata['aligntype'];
            finaljson['alignmethod'] = reqdata['alignmethod'];
            finaljson['gap'] = reqdata['gap'];
            finaljson['matrixname'] = $scope.matrixname;

            console.log(finaljson);

            var finalreq = {
              method: 'POST',
              url: 'http://127.0.0.1:5555/api/insertResult',
              headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Request-Headers' : '*'
              },
              data: finaljson
            }

            console.log($window.location.href);

            $http(finalreq)
            .then(function (resp) {
                console.log('success');
                console.log('inserted into database!');
                $window.location.href = './algorithms.html';
                //window.location.assign($window.location.href);
             },function (resp) {
             console.log('error');
            }); 

          },function (response) {
             console.log('error');
          });	

        
        

  	}

});