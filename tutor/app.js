var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

module.exports = app;




    // configuration =================

    mongoose.connect('mongodb://localhost:27017/align_tutor');     // connect to mongoDB database on modulus.io
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    //app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    //app.use(methodOverride());




    // define model =================


    var ScoringMatrix = mongoose.model('scoringmatrices', {
        name : String,
        chars : String,
        matrix : [[Number]]
    });


    var UserQuery = mongoose.model('userqueries', {
        sequence1 : String,
        sequence2 : String,
        alignment : String,
        scorematrix : String,
        gap : Number
    });



    // routes ======================================================================

    // api ---------------------------------------------------------------------

    app.get('/api/ScoringMatrix', function(req, res) {
    	
    	var names = req.query.name
        console.log(names)
        // use mongoose to get matrix using its name
        ScoringMatrix.findOne({ "name" :names },'name char matrix',function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            //console.log("heree")
            console.log("got response")
            console.log(todos)

            res.json(todos); 
            //res.send(200);
        });
    });


    app.get('/api/GetUserQuery', function(req, res) {
        UserQuery.findOne({}, {}, { sort: { $natural:-1 } },function(err, queryparams) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            console.log(queryparams)
            res.json(queryparams); 
            //res.send(200);
        });
    });    



    app.post('/api/PutUserQuery', function(req, res) {
        db.collection('userqueries').insert(req.body, function (err, result) {
          if (err)
             res.send('Error');
          else
            res.send('Success');
        });
    });    


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");


