const express = require('express');
const { needController } = require('../../controllers');

const router = express.Router();

router.route('/').post(needController.createSupport).get(needController.getSupports);

router.route('/:id').patch(needController.updateStatus);

module.exports = router;
