const express = require('express');
const { wardController } = require('../../controllers');

const router = express.Router();

router.route('/').get(wardController.getWards);

module.exports = router;
