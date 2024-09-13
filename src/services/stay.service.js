const { SupportStay } = require('../models');
const GenericService = require('./support.service');

class SupportStayService extends GenericService {
  constructor() {
    super(SupportStay); // Passing User model to GenericService
  }

  // You can also define other methods specific to UserService if needed
}

module.exports = new SupportStayService();
