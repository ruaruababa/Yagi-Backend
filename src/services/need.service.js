const { NeedSupport } = require('../models');
const GenericService = require('./support.service');

class NeedService extends GenericService {
  constructor() {
    super(NeedSupport); // Passing User model to GenericService
  }

  async updateStatus(id, status) {
    const need = await this.model.findById(id);
    if (!need) {
      throw new Error('Need not found');
    }
    need.status = status;
    return need.save();
  }
  // You can also define other methods specific to UserService if needed
}

module.exports = new NeedService();
