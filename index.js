/**
 * Created by rahul j jadav on 2/23/2017.
 */
var gzippo = require('gzippo');
var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
