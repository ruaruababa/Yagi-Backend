const { ConnectGov } = require('../models');
const GenericService = require('./support.service');

class ConnectGovService extends GenericService {
  constructor() {
    super(ConnectGov); // Passing User model to GenericService
  }

  // You can also define other methods specific to UserService if needed
}

module.exports = new ConnectGovService();
