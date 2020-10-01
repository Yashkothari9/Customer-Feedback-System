var express = require('express');
var router = express.Router();
var dbConnection = require('../db/db');

/* GET home page. */
router.post('/', function (req, res, next) {
    console.log(req.body);
    var useremail = req.body.Email;
    var customerId = req.body.customerId;
    var password = req.body.password;

    console.log(useremail);
    console.log(customerId);
    console.log(password);

    if (useremail == "admin@gmail.com" && customerId == 111 && password == "admin") {
        dbConnection.query('SELECT * FROM feedbacks', function (errors, results, field) {
            if (errors) {
                throw errors;
            } else {
                console.log(results[0]);
                res.render('admin_page', { items: results });
            }
        });
    }
    if (useremail && password && customerId) {
        console.log("checked the email and password");
        dbConnection.query('SELECT * FROM customers where cid = ? and email = ? and password = ?', [customerId, useremail, password], function (errors, results, field) {
            if (errors) {
                throw errors;
            } else {
                if (results.length > 0) res.render('grivences');
                else {
                    res.send('Please enter correct CustomerID, EmailID or Password!');
                    res.end();
                }
            }
        });

    } else {
        res.send('Please enter Email and Password!');
        res.end();
    }
});



module.exports = router;