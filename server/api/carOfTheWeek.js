import carOfTheWeek from './data/carOfTheWeek.json';

const express = require('express');
const router = new express.Router();

router.get("/", (req, res) => {
    res.send(carOfTheWeek);
});

module.exports = router;
