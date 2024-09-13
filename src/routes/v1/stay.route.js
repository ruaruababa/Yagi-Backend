const express = require('express');
const { stayController } = require('../../controllers');

const router = express.Router();

router.route('/').post(stayController.createSupport).get(stayController.getSupports);

module.exports = router;
