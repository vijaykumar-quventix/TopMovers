'use strict';

const router = require('express').Router();
const driver_controllers = require('../controllers/driverControllers');

router.post('/signup', driver_controllers.signup);


module.exports = router;