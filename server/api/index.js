const express = require('express');
const router = new express.Router();
const carOfTheWeekRouter = require('./carOfTheWeek.js');
const makesRouter = require('./makes.js');
const modelsRouter = require('./models.js');

router.use('/carOfTheWeek', carOfTheWeekRouter);
router.use('/models', modelsRouter);
router.use('/makes', makesRouter);

module.exports = router;
