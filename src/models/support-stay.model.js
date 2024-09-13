const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const supportStaySchema = mongoose.Schema(
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
supportStaySchema.plugin(toJSON);
supportStaySchema.plugin(paginate);

/**
 * @typedef SupportStaySchema
 */
const SupportStaySchema = mongoose.model('SupportStay', supportStaySchema);

module.exports = SupportStaySchema;
