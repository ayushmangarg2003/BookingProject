// Imports
const express = require('express');
const multer = require('multer');
const { getAllPlaces, getPlaceByID, addPlace, updatePlace, uploadbylink } = require('../controllers/PlaceController');

// Router Setup
const router = express.Router();


// Routes
router.get('/', getAllPlaces);

router.get('/:id', getPlaceByID);

router.post('/upload-by-link', uploadbylink);

router.post('/', addPlace);

router.put('/', updatePlace);


// Exports
module.exports = router;