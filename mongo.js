var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/align_tutpr";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("scoring_matrices", function(err, res) {
    if (err) throw err;
  
	var myobj = {name: "TEMP", chars: "atgc" , matrix: [[1,-1,-1,-1],[-1,1,-1,-1],[-1,-1,1,-1],[-1,-1,-1,1]]}	
	db.collection("scoring_matrices").insertOne(myobj, function(err, res) {
    if (err) throw err;
	db.close();
	});
});
});


db.scoringmatrices.insert({name: "TEMP", chars: "atgc" , matrix: [[1,-1,-1,-1],[-1,1,-1,-1],[-1,-1,1,-1],[-1,-1,-1,1]]})