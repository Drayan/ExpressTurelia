/**
 * Created by Michaël on 2/1/14.
 */
var express = require('express');
var http = require('http');
var path = require('path');

var router = require('../routes/routes');
var mongoose = require('mongoose');

var app = express();

var dburi = "";

exports.Initialize = function() {
    configureEnvironment();
    prepareServer();
    liftoffServer();
};

function configureEnvironment() {
    dburi = 'mongodb://localhost:27017/turelia-data';

    app.set('port', process.env.PORT || 3000);
    app.set('host', process.env.HOST || '127.0.0.1');
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'jade');

    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser('fhdsGAsudhqaizueHDA145sDA74'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '../public')));

    //dev only
    if('development' == app.get('env')) {
        app.use(express.errorHandler());
    }
}

function prepareServer() {
    router.createRoutes(app);

    //Connect to the datastore
    mongoose.connect(dburi, function(err) {
        if(err) {
            console.log('ERROR connecting to ' + dburi + '. ' + err);
        } else {
            console.log('Successfully connected to ' + dburi + '.');
        }
    });
}

function liftoffServer() {
    http.createServer(app).listen(app.get('port'), app.get('host'), function() {
        console.log('Turelia server listening ' + app.get('host') + ' on port ' + app.get('port'));
    })
}