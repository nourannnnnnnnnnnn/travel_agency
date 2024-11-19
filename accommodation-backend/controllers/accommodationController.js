const Accommodation = require('../models/Accommodation');

// Function to fetch accommodations based on filters
const getFilteredAccommodations = async (req, res) => {
  try {
    const { priceMin, priceMax, amenities, location, availableDate } = req.query;

    // Build the query object
    let query = {};
    if (priceMin && priceMax) {
      query.price = { $gte: Number(priceMin), $lte: Number(priceMax) };
    }
    if (amenities) {
      query.amenities = { $in: amenities.split(',') };
    }
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }
    if (availableDate) {
      query.availableDate = { $gte: new Date(availableDate) };
    }

    console.log("MongoDB Query:", query); // Debug the query

    // Fetch accommodations from MongoDB
    const accommodations = await Accommodation.find(query);
    res.status(200).json(accommodations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching accommodations' });
  }
};

module.exports = { getFilteredAccommodations };
