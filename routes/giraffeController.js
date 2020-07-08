const router = require('express').Router();
const Giraffe = require('../config/giraffe');
const { response } = require('express');

router.post('/create', function (req, response, next) {
    const body = req.body;
    const giraffe = new Giraffe(body);
    giraffe.save(function (error, result) {
        if (error) {
            return next(error);
        }
        response.status(201).send(result);
    });
});

router.get('/getAll', function (req, res, next) {
    Giraffe.find(function (err, giraffes) {
        if (err) return next(err);
        res.send(giraffes);
    });
})

router.get('/get', function (req, res, next) {
    Giraffe.findById(req.query.id, function (err, giraffes) {
        if (err) return next(err);
        res.send(giraffes);
    });
})

router.put('/update/:bloop', function(req, res, next){
    Giraffe.findByIdAndUpdate(req.params.bloop, req.body, function(err, giraffe) {
        if (err) return next(err);
        res.send(giraffe);
    })
})


router.delete('/remove/:id', function (req, res, next) {
    Giraffe.findByIdAndRemove(req.params.id, function (err, giraffe) {
        if (err) return next(err);
        res.status(204).send(giraffe);
    });
})


router.use(function (err, req, res, next) {
    res.status(500).send(err);
});

module.exports = router;