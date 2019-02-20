const express = require('express');
const Router = express.Router();
const loadMovies = require('../models/Movies'); // Stores new movies to initialize

/* Initialize Loki database, add Movies collection */
/* START */
const loki = require('lokijs');
const db = new loki('demo.json'); // In memory database (substitute to mongoDB)
const Movies = db.addCollection('movies'); // Movies collection
/* END */

// Use the Router.use feature to check if movies need to be loaded
// To load movies, use '/initialize' route
Router.use('', function (req, res, next) {
    if(req.url.endsWith('/initialize')) {
        loadNewMovies();    // function to load movies from the Models/Movies.js
        res.send('New movies loaded.');
    } else
        next();
});

Router.get ('/movies', function(req, res, next){
    res.send(Movies.find({}));
});

Router.post ('/movies', function(req, res, next) {
    res.send(Movies.insert({
        title : req.body.title,
        year : req.body.year,
        rating : req.body.rating,
        review : req.body.review,
        genre : req.body.genre,
        country : req.body.country,
        copies : req.body.copies        
    }));
});

// function to load new movies.
loadNewMovies = function() {
    Movies.insert(loadMovies);
};

module.exports = Router;