var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Lake = require('../models/lake');
var River = require('../models/river');
var Peak = require('../models/peak');
var Trail = require('../models/trail');
var Campground = require('../models/campground');
var Attraction = require('../models/attraction');

router.delete('/lake/:id', (req, res) => {
    Lake.deleteOne({_id: req.params.id})
        .then(lake => {
            res.status(200).json(lake)
        }).catch(err => res.status(400).json(err))
})

/*

// @access  Private
router.delete(
  '/experience/:exp_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.experience
          .map(item => item.id)
          .indexOf(req.params.exp_id);

        // Splice out of array
        profile.experience.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);



*/

router.delete('/river/:id', (req, res) => {
    River.deleteOne({_id: req.params.id})
        .then(river => {
            res.status(200).json(river)
        }).catch(err => res.status(400).json(err))
})

router.delete('/peak/:id', (req, res) => {
    Peak.deleteOne({_id: req.params.id})
        .then(peak => {
            res.status(200).json(peak)
        }).catch(err => res.status(400).json(err))
})

router.delete('/campground/:id', (req, res) => {
    Campground.deleteOne({_id: req.params.id})
        .then(campground => {
            res.status(200).json(campground)
        }).catch(err => res.status(400).json(err))
})

router.delete('/attraction/:id', (req, res) => {
    Attraction.deleteOne({_id: req.params.id})
        .then(attraction => {
            res.status(200).json(attraction)
        }).catch(err => res.status(400).json(err))
})

router.delete('/trail/:id', (req, res) => {
    Trail.deleteOne({_id: req.params.id})
        .then(trail => {
            res.status(200).json(trail)
        }).catch(err => res.status(400).json(err))
})

module.exports = router;