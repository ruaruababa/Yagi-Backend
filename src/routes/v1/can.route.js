const express = require('express');
const { canController } = require('../../controllers');

const router = express.Router();

router.route('/').post(canController.createSupport).get(canController.getSupports);

module.exports = router;
