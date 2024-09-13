const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const districtService = require('../services/district.service');

const getDistricts = catchAsync(async (req, res) => {
  const filter = {};
  if (req.query.name) {
    filter.name = { $regex: req.query.name, $options: 'i' }; // Case-insensitive partial match
  }

  if (req.query.code) {
    filter.code = req.query.code;
  }

  if (req.query.province_code) {
    filter.province_code = req.query.province_code;
  }

  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await districtService.queryLocations(filter, options);
  res.send(result);
});

module.exports = {
  getDistricts,
};
