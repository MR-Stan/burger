const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        let hbsObj = { burgers: data }
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

// burgers
router.post('/api/burgers', function (req, res) {
    burger.insertBurger(["burger_name", "devoured"], [req.body.name, req.body.devoured], function (result) {
        console.log(result);
        res.json({ id: result.id });
    });
});

router.put('/api/burgers/:id', function (req, res) {
    let condition = 'id = ' + red.params.id;
    console.log('condition', condition);
    burger.updateBurger({ devoured: red.body.devoured }, condition, function (result) {
        if (!result.changedRows) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;