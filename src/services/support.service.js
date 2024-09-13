class GenericService {
  constructor(model) {
    this.model = model;
  }

  async getItemById(id) {
    return this.model.findById(id);
  }

  async createItem(itemBody) {
    return this.model.create(itemBody);
  }

  async queryLocations(filter, options) {
    const items = await this.model.paginate(filter, options);
    return items;
  }

  async queryItems(filter, options) {
    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 10;

    // Define the aggregation pipeline
    const pipeline = [
      { $match: filter }, // Match the filter criteria
      { $skip: (page - 1) * limit }, // Pagination: Skip documents
      { $limit: limit }, // Pagination: Limit documents
      {
        $lookup: {
          from: 'provinces', // Collection name
          localField: 'province',
          foreignField: 'code', // Assuming `province` is a string field in NeedSupport and `code` in Province
          as: 'provinceDetails',
        },
      },
      {
        $lookup: {
          from: 'districts',
          localField: 'district',
          foreignField: 'code',
          as: 'districtDetails',
        },
      },
      {
        $lookup: {
          from: 'wards',
          localField: 'ward',
          foreignField: 'code',
          as: 'wardDetails',
        },
      },
      {
        $addFields: {
          province: { $arrayElemAt: ['$provinceDetails', 0] },
          district: { $arrayElemAt: ['$districtDetails', 0] },
          ward: { $arrayElemAt: ['$wardDetails', 0] },
        },
      },
      {
        $project: {
          provinceDetails: 0,
          districtDetails: 0,
          wardDetails: 0,
        },
      },
    ];

    // Execute the aggregation pipeline
    const results = await this.model.aggregate(pipeline).exec();

    // Count total items
    const totalResults = await this.model.countDocuments(filter).exec();

    // Return paginated result
    return {
      results,
      totalResults,
      totalPages: Math.ceil(totalResults / limit),
      limit,
      page,
    };
  }

  async getItemByEmail(email) {
    return this.model.findOne({ email });
  }
}

module.exports = GenericService;
