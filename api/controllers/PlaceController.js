const fs = require('fs');
const Place = require('../models/PlaceModel');
const imageDownloader = require('image-downloader');


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

// Upload images by device
const uploadImage = (req, res) => {
    const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
        const { path, originalname } = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
        uploadedFiles.push(newPath.replace('uploads/', ''));
    }
    res.json(uploadedFiles);
}

const addPlace = (req, res) => {
    const { token } = req.cookies;
    const {
        title, address, addedPhotos, description, price,
        perks, extraInfo, checkIn, checkOut, maxGuests,
    } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const placeDoc = await Place.create({
            owner: userData.id, price,
            title, address, photos: addedPhotos, description,
            perks, extraInfo, checkIn, checkOut, maxGuests,
        });
        res.json(placeDoc);
    });
}

const updatePlace = async (req, res) => {
    const { token } = req.cookies;
    const {
        id, title, address, addedPhotos, description,
        perks, extraInfo, checkIn, checkOut, maxGuests, price,
    } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const placeDoc = await Place.findById(id);
        if (userData.id === placeDoc.owner.toString()) {
            placeDoc.set({
                title, address, photos: addedPhotos, description,
                perks, extraInfo, checkIn, checkOut, maxGuests, price,
            });
            await placeDoc.save();
            res.json('ok');
        }
    });
}

// Get places of user
const getUserPlaces = (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        const { id } = userData;
        res.json(await Place.find({ owner: id }));
    });
}

module.exports = {getAllPlaces, getPlaceByID, uploadImage, uploadbylink, addPlace, updatePlace, getUserPlaces}