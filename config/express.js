/**
 * Created by dell on 19-Jun-16.
 */

'use strict';

var express = require('express'),
 bodyParser = require('body-parser'),
 consolidate = require('consolidate');



module.exports.init = function () {

    var app = express();

    this.initializeBodyParser(app);
    this.initViewEngine(app);
    this.ignorePublicContent(app);
    this.initializeRoutes(app);

    return app;
};

module.exports.initializeRoutes = function (app) {

    require('../modules/core/server/core.server.routes')(app);

};

module.exports.initializeBodyParser = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
};

module.exports.initViewEngine = function(app){
    app.engine('server.view.html',consolidate.swig);
    app.set('view engine','server.view.html');
    app.set('views','./modules/core/server/views');
}

module.exports.ignorePublicContent = function (app){
    app.use(express.static(path.resolve('./public')));
}