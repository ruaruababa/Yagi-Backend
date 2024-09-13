const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');

const needService = require('../services/need.service');

const createSupport = catchAsync(async (req, res) => {
  const user = await needService.createItem(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getSupports = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['province', 'district', 'ward', 'status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await needService.queryItems(filter, options);
  res.send(result);
});

const updateStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const info = await needService.updateStatus(id, status);
  res.send(info);
});

module.exports = {
  updateStatus,
  createSupport,
  getSupports,
};
