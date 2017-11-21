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
	var alignment = req.body.alignment;
	var submatrix = req.body.scorematrix;
	var gap = req.body.gap;

  switch(req.body.alignment){

  	case 'global':
  		alignObj = globalAlignment(seq1,seq2,alignment,scorematrix,gap);
  		break;

  	case 'local':
  		alignObj = localAlignment(seq1,seq2,alignment,scorematrix,gap);
  		break;

  	case 'dovetail':
  		alignObj = dovetailAlignment(seq1,seq2,alignment,scorematrix,gap);
  		break;

  }
  	
  	res.header("Content-Type","application/json");
  	res.send(alignObj);
});

function global(seq1,seq2,alignment,scorematrix,gap){

}

function global(seq1,seq2,alignment,scorematrix,gap){

}

function global(seq1,seq2,alignment,scorematrix,gap){

}





