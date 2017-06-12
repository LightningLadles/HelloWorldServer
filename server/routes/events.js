'use strict';
const express = require('express');
const router = express.Router();
const EventController = require('../controllers').Events;

router.route('/:bookingId')
  .post(EventController.createEvents);

router.route('/booking/:bookingId')
  .get(EventController.getEventsPerBooking);

router.route('/remove/:bookingId/:eventName')
  .delete(EventController.removeEventForABooking);


module.exports = router;
