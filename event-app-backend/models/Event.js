// Defines the MongoDB schema

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    city: String,
    category: Category,
    imageUrl: String,
    date: { type: Date, required: true},
    location: String,
    viewCount: Int = 0,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
