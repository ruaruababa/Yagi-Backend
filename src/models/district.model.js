const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const districtSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  province_code: {
    type: mongoose.Schema.Types.String, // Reference by province `code`
    ref: 'Province',
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
});

districtSchema.plugin(toJSON);
districtSchema.plugin(paginate);

// Create District model from schema
const District = mongoose.model('District', districtSchema);

module.exports = District;
