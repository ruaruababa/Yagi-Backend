const express = require('express');
const { govController } = require('../../controllers');

const router = express.Router();

router.route('/').post(govController.createSupport).get(govController.getSupports);

module.exports = router;
