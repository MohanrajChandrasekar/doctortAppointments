const express = require('express');
const router = express.Router();

const read = require('./read.appointment');
const write = require('./create.appointment');

router.get('/read', read.getAppoitments);
router.post('/add', write.addNewAppointment);

module.exports = router;

