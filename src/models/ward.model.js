const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const wardSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  district_code: {
    type: mongoose.Schema.Types.String,
    ref: 'District', // Reference to District
    required: true,
  },
  province_code: {
    type: mongoose.Schema.Types.String,
    ref: 'Province', // Reference to Province
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
});

wardSchema.plugin(toJSON);
wardSchema.plugin(paginate);

const Ward = mongoose.model('Ward', wardSchema);
module.exports = Ward;
