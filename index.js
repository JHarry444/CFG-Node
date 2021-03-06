const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/controller');
require('./config/db_connection');
const giraffeRoutes = require('./routes/giraffeController');

app.use(cors());

app.use(bodyParser.json());

const dateLogger = function (request, response, next) {
    console.log(`Request received at ${new Date()}`);
    next();
};

app.use(dateLogger);

app.use('/', routes);

app.use('/giraffe', giraffeRoutes);

app.use(function (error, request, response, next) {
    response.status(500).send(error.stack);
});

const server = app.listen(4494, function () {
    console.log(`Server started successfully on port ${server.address().port}`)
});

module.exports = server;