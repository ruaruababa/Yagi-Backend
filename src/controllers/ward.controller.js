const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const wardService = require('../services/ward.service');

const getWards = catchAsync(async (req, res) => {
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

  if (req.query.district_code) {
    filter.district_code = req.query.district_code;
  }

  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await wardService.queryLocations(filter, options);
  res.send(result);
});

module.exports = {
  getWards,
};
