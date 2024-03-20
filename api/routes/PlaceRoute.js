// Imports
const express = require('express');
const multer = require('multer');
const { getAllPlaces, getPlaceByID, addPlace, updatePlace, uploadbylink } = require('../controllers/PlaceController.js');

// Router Setup
const router = express.Router();


// Get All Places
router.get('/', getAllPlaces);

// Get one by ID
router.get('/:id', getPlaceByID);

// Add New
router.post('/', addPlace);

// Update Exisiting Place
router.put('/', updatePlace);


// Exports
module.exports = router;