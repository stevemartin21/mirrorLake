var express = require('express');
var router = express.Router();

var User = require('../models/user');

var Lake = require('../models/lake');
var River = require('../models/river');
var Peak = require('../models/peak');
var Trail = require('../models/trail');
var Campground = require('../models/campground');
var Attraction = require('../models/attraction');

router.put('/lake/:id', (req, res) => {
    const newLake ={
        name: req.body.name,
        size: req.body.size,
        image: req.body.image,
        description: req.body.description,
        sizeDesc: req.body.sizeDesc,
        hike: req.body.hike,
        parking: req.body.parking,
        rv: req.body.rv,
        campgrounds: req.body.campgrounds
    } 
    console.log(newLake)

    Lake.updateOne({_id: req.params.id}, newLake)
        .then(lake => {
            console.log(lake);
        res.status(200).json(lake)
    }).catch(err => res.status(400).json(err))
})

router.put('/river/:id', (req, res) => {
    const newRiver = {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        sizeDesc: req.body.sizeDesc,
        type: req.body.type,
        length: req.body.length,
        origin: req.body.origin
    }

    River.updateOne({_id: req.params.id}, newRiver).then(river => {
        res.status(200).json(river)
    }).catch(err => res.status(400).json(err))
})

router.put('/peak/:id', (req, res) => {
    const newPeak = {
        name: req.body.name,
        elevation: req.body.elevation,
        prominence: req.body.prominence,
        description: req.body.description,
        hike: req.body.hike,
        elevationGain: req.body.elevationGain
    }

    Peak.updateOne({_id: req.params.id}, newPeak).then(peak => {
        res.status(200).json(peak)
    }).catch(err => res.status(400).json(err))
})

router.put('/trail/:id', (req, res) => {
    const newTrail = {
        name: req.body.name,
        distance: req.body.distance,
        elevationGain: req.body.elevationGain,
        description: req.body.description,
        hike: req.body.hike
    }

    Trail.updateOne({_id: req.params.id}, newTrail).then(trail => {
        res.status(200).json(trail)
    }).catch(err => res.status(400).json(err))
})

router.put('/campground/:id', (req, res) => {
    const newCampground = {
        name: req.body.name,
        spot: req.body.spot,
        description: req.body.description,
        parking: req.body.parking,
        rv: req.body.rv,
        campgrounds: req.body.campgrounds
    }

    Campground.updateOne({_id: req.params.id}, newCampground).then(campground => {
        res.status(200).json(campground)
    }).catch(err => res.status(400).json(err))
})

router.put('/attraction/:id', (req, res) => {
    const newAttraction = {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        hike: req.body.hike,
        parking: req.body.parking,
        rv: req.body.rv,
        campgrounds: req.body.campgrounds,
        type: req.body.type
    }

    Attraction.updateOne({_id: req.params.id}, newAttraction).then(attraction => {
        res.status(200).json(attraction)
    }).catch(err =>  res.status(400).json(err))
})



module.exports = router;