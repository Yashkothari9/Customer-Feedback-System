var express = require('express');
var router = express.Router();
var dbConnection = require('../db/db');
// var popup = require('popups');

/* GET home page. */
router.post('/', function (req, res, next) {
    console.log(req.body);
    var name = req.body.name;
    var cid = req.body.CustomerId;
    var pid = req.body.ProductId;
    var p = req.body.problem.trim();

    console.log(name);
    console.log(cid);
    console.log(pid);
    console.log(p);

    if (name && cid && pid && p) {
        dbConnection.query('INSERT INTO feedbacks VALUES (?, ?, ?, ?)', [name, cid, pid, p], function (errors, results, field) {
            if (errors) {
                throw errors;
            } else {
                console.log('Successfully inserted values');
                res.render('thank_you');
            }
        });
    } else {
        res.send('Please enter All Details!');
        res.end();
    }
});



module.exports = router;