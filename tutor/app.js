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


    // routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/ScoringMatrix', function(req, res) {
    	
    	var name = req.query.name

        // use mongoose to get all todos in the database
        ScoringMatrix.findOne({'name':name},'name chars matrix',function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            console.log(todos)
            res.json(todos); // return all todos in JSON format
            res.send(200);
        });
       


    });

    // create todo and send back all todos after creation
    app.post('/api/ScoringMatrix', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            name : req.body.name,
            chars : req.body.chars,
            score : req.body.score,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
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


