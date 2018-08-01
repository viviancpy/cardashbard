import models from './data/models.json';

const express = require('express');
const router = new express.Router();

router.get("/", (req, res) => {
    res.send(models);
});

module.exports = router;
