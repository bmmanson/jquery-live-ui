var express = require('express')
var router = express.Router()
var db = require('../models')
var Hotel = require('../models/hotel')
var Rest = require('../models/restaurant')
var Act = require('../models/activity')
var Promise = require('bluebird')

function names(items) {
  return items.map(function(item) {
    return item.name
  })
}

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Rest.findAll(),
    Act.findAll()
  ])
  .spread(function(hotels, rests, acts) {
    var name = [names(hotels), names(rests), names(acts)]
    // res.json(name).send();
    return name
  })
  .then(function(name) {
    res.render('index', {
      templateHotels: name[0],
      templateRestaurants: name[1],
      templateActivities: name[2]
    })
  })
  .catch(next)

  // res.render('layout')
})

module.exports = router
