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


app.listen(5555,function(){
  console.log("Started on PORT 5555");
})



app.get('/api/getAllMatrices',function(req,res){

	var MongoClient1 = require('mongodb').MongoClient;
	var assert1 = require('assert');
	var ObjectId1 = require('mongodb').ObjectID;
	var url1 = 'mongodb://tutor:tutor@ds115866.mlab.com:15866/seqaligntutor';
	var collectionname = '';
	
	var selectDocuments = function(db, callback){
		var cursor =db.collection(collectionname).find().toArray(function(err, docs) {
    	assert1.equal(err, null);
    	res.send(docs);
    	console.log('Executed successfully');
  		});

	}

	MongoClient1.connect(url1, function(err, db) {
  		assert1.equal(null, err);
  		if(req.query.matrixtype == "Nucleotides")
  			collectionname = 'submatrixN';
  		else
  			collectionname = 'submatrixP';
  		selectDocuments(db, function() {
      	db.close();
  		});
  		
	});

});

app.post('/api/insertMatrix',function(req,res){
	
	var MongoClient = require('mongodb').MongoClient;
	var assert = require('assert');
	var ObjectId = require('mongodb').ObjectID;
	var url = 'mongodb://tutor:tutor@ds115866.mlab.com:15866/seqaligntutor';

	var matobj = {};
	matobj['_id'] = req.body.matrixname;
	matobj[req.body.matrixname] = req.body.matrixarray;

	console.log(req.body);

	var collectionname = ''

	if(req.body.matrixtype == "Nucleotides"){
		collectionname = 'submatrixN';
	}
	else{
		collectionname = 'submatrixP';
	}

	var insertDocument = function(db, callback) {
		var count = db.collection(collectionname).find({'_id' : matobj['_id']}).toArray(function(err, result) {
    		if (err) throw err;
    		console.log(result);
    		if(result.length == 0){
 				db.collection(collectionname).insertOne(matobj , function(err, result) {
    			assert.equal(err, null);
    			console.log("Inserted successfully!");
    			res.send("Inserted successfully!");
    			callback();
 				});
 			}
 			else{
 				res.send("Record already exists!");
 			}
	
  		});
		
	}

	MongoClient.connect(url, function(err, db) {
  		assert.equal(null, err);
  		insertDocument(db, function() {
      	db.close();
  		});
	});

});

app.post('/api/insertResult',function(req,res){
	
	var MongoClient2 = require('mongodb').MongoClient;
	var assert2 = require('assert');
	var ObjectId = require('mongodb').ObjectID;
	var url2 = 'mongodb://tutor:tutor@ds115866.mlab.com:15866/seqaligntutor';

	var matobj = req.body;
	
	console.log(req.body);

	var collectionname = 'userqueries';

	var insertResult = function(db, callback) {
		db.collection(collectionname).insertOne(matobj , function(err, result) {
    			assert2.equal(err, null);
    			console.log("Inserted successfully!");
    			callback();
 		});
 			
	}

	MongoClient2.connect(url2, function(err, db) {
  		assert2.equal(null, err);
  		insertResult(db, function() {
      	db.close();
      	res.send('inserted result!')
  		});

    });

});