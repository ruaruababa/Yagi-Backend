const express = require('express');
const { districtController } = require('../../controllers');

const router = express.Router();

router.route('/').get(districtController.getDistricts);

module.exports = router;
