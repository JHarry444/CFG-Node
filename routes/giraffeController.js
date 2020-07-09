const router = require('express').Router();
const Giraffe = require('../config/giraffe');

router.post('/create', (req, response, next) => {
  const { body } = req;
  const giraffe = new Giraffe(body);
  giraffe.save((error, result) => {
    if (error) {
      return next(error);
    }
    return response.status(201).send(result);
  });
});

router.get('/getAll', (req, res, next) => {
  Giraffe.find((err, giraffes) => {
    if (err) return next(err);
    return res.send(giraffes);
  });
});

router.get('/get', (req, res, next) => {
  Giraffe.findById(req.query.id, (err, giraffes) => {
    if (err) return next(err);
    return res.send(giraffes);
  });
});

router.put('/update/:bloop', (req, res, next) => {
  Giraffe.findByIdAndUpdate(req.params.bloop, req.body, (err, giraffe) => {
    if (err) return next(err);
    return res.send(giraffe);
  });
});

router.delete('/remove/:id', (req, res, next) => {
  Giraffe.findByIdAndRemove(req.params.id, (err, giraffe) => {
    if (err) return next(err);
    return res.status(204).send(giraffe);
  });
});

router.use((err, req, res, next) => res.status(500).send(err));

module.exports = router;
