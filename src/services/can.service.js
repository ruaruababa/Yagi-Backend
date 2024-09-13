const { CanSupport } = require('../models');
const GenericService = require('./support.service');

class CanService extends GenericService {
  constructor() {
    super(CanSupport); // Passing User model to GenericService
  }

  // You can also define other methods specific to UserService if needed
}

module.exports = new CanService();
