const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

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
})


const server = app.listen(4494, function () {
    console.log(`Server started successfully on port ${server.address().port}`)
});
