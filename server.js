'use strict' ;

const express = require('express');
const app = express();
require('dotenv').config();
const mysqlConnection = require('./config/database');

mysqlConnection.mysqlConnection();

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Server Running On Port ${port}`));