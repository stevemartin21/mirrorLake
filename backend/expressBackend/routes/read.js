var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Lake = require('../models/lake');
var River = require('../models/river');
var Peak = require('../models/peak');
var Trail = require('../models/trail');
var Campground = require('../models/campground');
var Attraction = require('../models/attraction');

//  Select All 

router.get('/lakes', (req, res) => {
    Lake.find().then(lakes => {
        res.status(200).json(lakes)
    }).catch(err => res.status(400).json(err))
})

router.get('/rivers', (req, res) => {
    River.find().then(rivers => {
        res.status(200).json(rivers)
    }).catch(err =>  res.status(400).json(err))
})

router.get('/peaks', (req, res) => {
    Peak.find().then(peaks => {
        res.status(200).json(peaks)
    }).catch(err =>  res.status(400).json(err))
})

router.get('/trails', (req, res) => {
    Trail.find().then(trails => {   
        res.status(200).json(trails)
    }).catch(err =>  res.status(400).json(err))
})

router.get('/campgrounds', (req, res) => {
    Campground.find().then( campgrounds => {
        res.status(200).json(campgrounds)
    }).catch(err =>  res.status(400).json(err))
})

router.get('/attractions', (req, res) => {

    Attraction.find().then(attractions => {
        res.status(200).json(attractions)
    }).catch(err =>  res.status(400).json(err))
    
})

// individual Get Requests 

router.get('/lake/:id', (req, res) => {
    Lake.findOne({_id: req.params.id})
        .then(lake => {
            res.status(200).json(lake)
        }).catch(err => res.status(400).json(err))
})

router.get('/river/:id', (req, res) => {
    River.findOne({_id: req.params.id})
        .then(river => {
            res.status(200).json(river)
        }).catch(err => res.status(400).json(river))
})

router.get('/peak/:id', (req, res) => {
    Peak.findOne({_id: req.params.id})
        .then(peak => {
            res.status(200).json(peak)
        }).catch(err => res.status(400).json(err))
})

router.get('/campground/:id', (req, res) => {
    Campground.findOne({_id: req.params.id})
        .then(campground => {
            res.status(200).json(campground)
        }).catch(err => res.status(400).json(err))
})

router.get('/trail/:id', (req, res) => {
    Trail.findOne({_id: req.params.id})
        then(trail => {
            res.status(200).json(trail)
        }).catch(err =>  res.status(400).json(err))
})

router.get('/attraction/:id', (req, res) => {
    Attraction.findOne({_id: req.params.id})
        .then(attraction => {
            res.status(200).json(attraction)
        }).catch(err => res.status(400).json(err))
})


module.exports = router;