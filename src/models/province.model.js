const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const provinceSchema = new mongoose.Schema({
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
});

provinceSchema.plugin(toJSON);
provinceSchema.plugin(paginate);

// Tạo model từ schema
const Province = mongoose.model('Province', provinceSchema);

module.exports = Province;
