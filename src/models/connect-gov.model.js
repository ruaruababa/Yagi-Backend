const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const connectGovSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    province: {
      type: mongoose.Schema.Types.String,
      ref: 'Province',
      required: true,
    },
    district: {
      type: mongoose.Schema.Types.String,
      ref: 'District',
      required: true,
    },
    ward: {
      type: mongoose.Schema.Types.String,
      ref: 'Ward',
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
connectGovSchema.plugin(toJSON);
connectGovSchema.plugin(paginate);

/**
 * @typedef ConnectGov
 */
const ConnectGov = mongoose.model('ConnectGov', connectGovSchema);

module.exports = ConnectGov;
