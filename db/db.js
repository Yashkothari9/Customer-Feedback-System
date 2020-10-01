const mysql = require('mysql');
const dbConnection = mysql.createConnection({
    host: "richik-db.czcp7dn9rwqn.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "admin1234#",
    database: 'feedback'      // MYSQL DB NAME
});
module.exports = dbConnection;