const { Province } = require('../models');
const GenericService = require('./support.service');

class ProvinceService extends GenericService {
  constructor() {
    super(Province); // Passing User model to GenericService
  }

  // You can also define other methods specific to UserService if needed
}

module.exports = new ProvinceService();
