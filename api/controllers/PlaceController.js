const fs = require('fs');
const Place = require('../models/PlaceModel');
const imageDownloader = require('image-downloader');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET


const getAllPlaces = async (req, res) => {
    res.json(await Place.find());
}

const getPlaceByID = async (req, res) => {
    const { id } = req.params;
    res.json(await Place.findById(id));
}

// Upload Images by link
const uploadbylink = async (req, res) => {
    const { link } = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: __dirname + '/uploads/' + newName,
    });
    res.json(newName);
}

const addPlace = async (req, res) => {
    const {
        owner, title, address, addedPhotos, description, price,
        perks, extraInfo, checkIn, checkOut, maxGuests,
    } = req.body;

    const placeDoc = await Place.create({
        price, owner,
        title, address, photos: addedPhotos, description,
        perks, extraInfo, checkIn, checkOut, maxGuests,
    });

    res.json(placeDoc);
}

const updatePlace = async (req, res) => {
    const {
        id, owner, title, address, addedPhotos, description,
        perks, extraInfo, checkIn, checkOut, maxGuests, price,
    } = req.body;
    const placeDoc = await Place.findById(id);
    placeDoc.set({
        owner, title, address, photos: addedPhotos, description,
        perks, extraInfo, checkIn, checkOut, maxGuests, price,
    });
    await placeDoc.save();
    res.json('ok');
}

// Get places of user
const getUserPlaces = (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        const { id } = userData;
        res.json(await Place.find({ owner: id }));
    });
    console.log("Bhaiiiii")
}

module.exports = { getAllPlaces, getPlaceByID, uploadbylink, addPlace, updatePlace, getUserPlaces }