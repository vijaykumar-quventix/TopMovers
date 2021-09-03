'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const mysqlConnection = require('./config/database');
const customer_routes = require('./routes/customerRoutes');
const driver_routes = require('./routes/driverRoutes');

mysqlConnection.mysqlConnection();

const port = process.env.PORT || 3000;

app.use('/customer', customer_routes);
app.use('/driver', driver_routes);


app.listen(port, () => console.log(`Server Running On Port ${port}`));