const express = require('express');
const { getFilteredAccommodations } = require('../controllers/accommodationController');
const router = express.Router();

// Route to get filtered accommodations
router.get('/', getFilteredAccommodations);

module.exports = router;
