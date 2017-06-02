'use strict';
const express = require('express');
const router = express.Router();
const ChatController = require('../controllers').Chat;



router.route('/')
  .post(ChatController.createChat);

router.route('/all/:facebookId')
  .get(ChatController.getAllChatsByUser);

router.route('/:facebookId/:guideFacebookId')
  .get(ChatController.getChat);


module.exports = router;
