'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const mysqlConnection = require('./config/database');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

mysqlConnection.mysqlConnection();

const port = process.env.PORT || 3000;

// Importing Routes
const customer_routes = require('./routes/customerRoutes');
const driver_routes = require('./routes/driverRoutes');

// Use Routes
app.use('/customer', customer_routes);
app.use('/driver', driver_routes);

// swagger setup
const swaggerDefinition = require('./lib/swaggerdefinition');

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => console.log(`Server Running On Port ${port}`));