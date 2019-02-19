const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: String,
    review: Number,
    genre: String,
    country: String,
    copies: Number
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;