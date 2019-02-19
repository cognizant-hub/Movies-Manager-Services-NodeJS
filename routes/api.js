const express = require('express');
const Router = express.Router();
const Movie = require('../models/movies');

Router.get ('/movies', function(req, res, next){
    Movie.find( function(err, movies) {
        if(err) return res.send(500, err);
        return res.send(movies);
    });
});

Router.post ('/movies', function(req, res, next) {
    var newMovie = new Movie();
    newMovie.title = req.body.title;
    newMovie.year = req.body.year;
    newMovie.rating = req.body.rating;
    newMovie.review = req.body.review;
    newMovie.genre = req.body.genre;
    newMovie.country = req.body.country;
    newMovie.copies = req.body.copies;
    newMovie.save(function(err, movie) {
        if (err) return res.send(500, err);
        return res.json(movie);
    });
});

module.exports = Router;