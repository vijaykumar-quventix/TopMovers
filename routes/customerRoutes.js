'use strict';

const router = require('express').Router();
const customer_controllers = require('../controllers/customerControllers');

router.post('/signup', customer_controllers.signup);

module.exports = router;