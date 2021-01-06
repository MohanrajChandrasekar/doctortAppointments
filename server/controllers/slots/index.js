const express = require('express');
const router = express.Router();

const read = require('./read.slots');
const write = require('./create.slots');

router.get('/read', read.getSlots);
router.post('/add', write.addNewSlots);

module.exports = router;