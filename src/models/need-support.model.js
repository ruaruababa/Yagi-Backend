const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const needSupportSchema = mongoose.Schema(
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

    status: {
      type: Boolean,
      default: false,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
needSupportSchema.plugin(toJSON);
needSupportSchema.plugin(paginate);

/**
 * @typedef NeedSupport
 */
const NeedSupport = mongoose.model('NeedSupport', needSupportSchema);

module.exports = NeedSupport;
