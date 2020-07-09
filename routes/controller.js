const router = require('express').Router();

router.get('/', (request, response) => {
  response.status(418).send('Hello, World!');
});

router.post('/create', (req, res) => {
  const {
    body,
  } = req;
  res.status(201).send(body.message);
});

router.put('/update', (req, res) => {
  const params = req.query;
  res.status(202).json(params);
});

router.delete('/remove/:bloop', (req, res) => {
  const {
    params,
  } = req;
  res.status(200).send(params.bloop);
});

router.get('/error', (req, res, next) => next(new Error('I am a contrived error!')));

module.exports = router;
