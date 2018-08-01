import makes from './data/makes.json';

const express = require('express');
const router = new express.Router();

router.get("/", (req, res) => {
    res.send(makes);
});

module.exports = router;
