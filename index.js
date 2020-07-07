const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());

app.use(function (request, response, next) {
    console.log(`Request received at ${new Date()}`);
    next();
});

app.get('/', function (request, response) {
    response.status(418).send('Hello, World!');
});

app.post('/create', function (req, res) {
    const body = req.body;
    console.log(body);
    res.status(201).send(body.message);
});

app.put('/update', (req, res) => {
    const params = req.query;
    console.log(params);
    res.status(202).send(params);
})

app.delete('/remove/:bloop', function (req, res) {
    const params = req.params;
    console.log(params);
    res.status(200).send(params.bloop);
});

app.get('/error', function (req, res, next) {
    // throw new Error('I am a contrived error!');
    return next(new Error('I am a contrived error!'));
    console.log('?');
})

app.use(function (error, request, response, next) {
    response.status(500).send(error.stack);
});

const server = app.listen(4494, function () {
    console.log(`Server started successfully on port ${server.address().port}`)
});
