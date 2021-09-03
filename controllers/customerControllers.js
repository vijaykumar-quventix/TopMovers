'use strict';
const DAO = require('../DAO/mysql');

exports.signup = async (req, res) => {

    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

    let check = await DAO.mysql_query('Create Table', sql);

    //     connection.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table created");
    //   });
    console.log(check);

    res.send('Working In Signup');
}