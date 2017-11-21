var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(3000,function(){
  console.log("Started on PORT 3000");
})

var alignObj = null;

app.post('/api/executeAlignment',function(req,res){
  //execute alignment method
	var alignObj = null;

	var seq1 = req.body.sequence1;
	var seq2 = req.body.sequence2;
	var alignmethod = req.body.alignmethod;
	var aligntype = req.body.matrixtype;
	var submatrix = req.body.scorematrix;
	var gap = req.body.gap;

	var letters = '';
	var map = {};


	if(aligntype == "Nucleotides"){
		letters = 'acgt';
	}
	else{
		letters = 'arndceqghilkmfpstwyv';
	}


	for(var i=0;i<letters.length;i++){
		for(var j=0;j<letters.length;j++){
			map[letters.charAt(i) + letters.charAt(j)] = submatrix[i][j];
		}
	}

  switch(req.body.alignment){

  	case 'global':
  		alignObj = globalAlignment(seq1,seq2,alignment,map,gap);
  		break;

  	case 'local':
  		alignObj = localAlignment(seq1,seq2,alignment,map,gap);
  		break;

  	case 'dovetail':
  		alignObj = dovetailAlignment(seq1,seq2,alignment,map,gap);
  		break;

  }
  	
  	res.header("Content-Type","application/json");
  	res.send(alignObj);
});

function global(seq1,seq2,alignment,map,gap){
	var alignmat = [];
	
	for (var i = 0; i <= seq1.length; i++) {
		var temp = [];
		for (var j = 0; j <= seq2.length; j++) {
			temp.push(0);
		}
		alignmat.push(temp);
	}

	for (var j = 1; j < alignmat[0].length; j++)
		alignmat[0][j] = alignmat[0][j - 1] + gap;

	for (var i = 1; i < alignmat.length; i++)
		alignmat[i][0] = alignmat[i - 1][0] + gap;

	for (var i = 1; i < alignmat.length; i++) {
		for (var j = 1; j < alignmat[0].length; j++) {
				alignmat[i][j] = Math.max(alignmat[i][j - 1] + gap, alignmat[i - 1][j] + gap);
				alignmat[i][j] = Math.max(alignmat[i][j], alignmat[i - 1][j - 1] + map[seq1.charAt(i-1)+seq2.charAt(j-1)]);
			}
		}

}

function global(seq1,seq2,alignment,map,gap){

}

function global(seq1,seq2,alignment,map,gap){

}





