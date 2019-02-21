var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

 //  Lakes, Rivers, Peaks, Special Attractions, Campgrounds, Trails
var User = require('../models/user');
 var Lake = require('../models/lake');
var River = require('../models/river');
var Peak = require('../models/peak');
var Trail = require('../models/trail');
var Campground = require('../models/campground');
var Attraction = require('../models/attraction');

router.post('/user', (req, res) => {

    User.findOne({email: req.body.email})
        .then(user => {
            if (user ) {
                res.status(400).json({message: 'There is already a user with that email'})
            }
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    newUser.save().then(user => {
                        res.status(200).json(user)
                    }).catch(err => res.status(400).json(err))
                })
            })
        }) 
})

let selectedUser;

router.post('/token', (req, res) => {
    User.findOne({email: req.body.email}).then(user => {
        console.log(user);
        if(!user) {
            res.status(400).json({message: "there is not a user with that email"})
        } else {
            selectedUser = user;
           return bcrypt.compare(req.body.password, user.password)
                .then(success => {
                    console.log(success);
                    if(!success) {
                        res.status(400).json({message: 'passwords do not match'})
                    }
                    const token = jwt.sign({email: selectedUser.email, userId: selectedUser._id, name: selectedUser.name},
                        'secretisyabbdabbado',
                        {expiresIn: '1h'})

                        console.log(token);

                        res.status(200).json({
                            token: 'Bearer ' + token,
                            userId: selectedUser._id,
                            expiresIn: 3600
                        })
                }).catch(err =>  res.status(400).json(err))
        }
    })
})


router.post('/lake', (req, res) => {
    const newLake = new Lake({
        name: req.body.name,
        size: req.body.size,
        image: req.body.image,
        description: req.body.description,
        sizeDesc: req.body.sizeDesc,
        hike: req.body.hike,
        parking: req.body.parking,
        rv: req.body.rv,
        campgrounds: req.body.campgrounds
    })

    newLake.save().then(lake => {
        res.status(200).json(lake)
    }).catch(err => res.status(400).json(err))
})

/*
sizeDesc: this.state.sizeDesc,
             type: this.state.type,
             length: this.state.length,
             origin: this.state.origin

*/

router.post('/river', (req, res) => {
    const newRiver = new River({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        sizeDesc: req.body.sizeDesc,
        type: req.body.type,
        length: req.body.length,
        origin: req.body.origin
    })

    newRiver.save().then(river => {
        res.status(200).json(river)
    }).catch(err => res.status(400).json(err))
})

router.post('/peak', (req, res) => {
    const newPeak = new Peak({
        name: req.body.name,
        elevation: req.body.elevation,
        prominence: req.body.prominence,
        description: req.body.description,
        hike: req.body.hike,
        elevationGain: req.body.elevationGain
    })

    newPeak.save().then(peak => {
        res.status(200).json(peak)
    }).catch(err => res.status(400).json(err))
})

router.post('/trail', (req, res) => {
    const newTrail = new Trail({
        name: req.body.name,
        distance: req.body.distance,
        elevationGain: req.body.elevationGain,
        description: req.body.description,
        hike: req.body.hike
    })

    newTrail.save().then(trail => {
        res.status(200).json(trail)
    }).catch(err => res.status(400).json(err))
})

router.post('/campground', (req, res) => {
    const newCampground = new Campground({
        name: req.body.name,
        spot: req.body.spot,
        description: req.body.description,
        parking: req.body.parking,
        rv: req.body.rv,
        campgrounds: req.body.campgrounds
    })

    newCampground.save().then(campground => {
        res.status(200).json(campground)
    }).catch(err => res.status(400).json(err))
})


router.post('/attraction', (req, res) => {
    const newAttraction = new Attraction({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        hike: req.body.hike,
        parking: req.body.parking,
        rv: req.body.rv,
        campgrounds: req.body.campgrounds,
        type: req.body.type
    })

    newAttraction.save().then(attraction => {
        res.status(200).json(attraction)
    }).catch(err =>  res.status(400).json(err))
})



module.exports = router;