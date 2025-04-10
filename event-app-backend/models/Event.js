// Defines the MongoDB schema

const mongoose = require('mongoose');

const Cities = ['ATHENS', 'THESSALONIKI', 'PATRA', 'LARISSA'];
const Categories = ['MUSIC', 'SPORTS', 'CULTURE', 'FOOD', 'ARTS', 'EDUCATION', 'ENTERTAINMENT'];

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    city: { type: String, enum: Cities, required: true },
    category: { type: String, enum: Categories, required: true },
    imageUrl: String,
    date: { type: Date, required: true},
    location: String,
    viewCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
