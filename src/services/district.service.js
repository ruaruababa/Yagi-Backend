const { District } = require('../models');
const GenericService = require('./support.service');

class DistrictService extends GenericService {
  constructor() {
    super(District); // Passing User model to GenericService
  }

  // You can also define other methods specific to UserService if needed
}

module.exports = new DistrictService();
