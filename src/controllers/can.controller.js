const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const canService = require('../services/can.service');

const createSupport = catchAsync(async (req, res) => {
  const user = await canService.createItem(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getSupports = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['province', 'district', 'ward', 'status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await canService.queryItems(filter, options);
  res.send(result);
});

module.exports = {
  createSupport,
  getSupports,
};
