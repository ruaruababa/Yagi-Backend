const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const provinceService = require('../services/province.service');

const getProvinces = catchAsync(async (req, res) => {
  const filter = {};

  if (req.query.name) {
    filter.name = { $regex: req.query.name, $options: 'i' }; // Case-insensitive partial match
  }

  if (req.query.code) {
    filter.code = req.query.code; // Case-insensitive partial match
  }
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await provinceService.queryLocations(filter, options);
  res.send(result);
});

module.exports = {
  getProvinces,
};
