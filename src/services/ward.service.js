const { Ward } = require('../models');
const GenericService = require('./support.service');

class WardService extends GenericService {
  constructor() {
    super(Ward); // Passing User model to GenericService
  }

  // You can also define other methods specific to UserService if needed
}

module.exports = new WardService();
