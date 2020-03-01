const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));
app.get('/', function (req, res) {
    res.send('Hello from the library');
});

app.listen(3000, function () {
    debug(`Listening in port ${chalk.green('3000')}`);
});