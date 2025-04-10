// Defines the MongoDB schema

const mongoose = require('mongoose');

enum class City {
    ATHENS,
    THESSALONIKI,
    PATRA,
    LARISSA
}

enum class Category {
    MUSIC,
    SPORTS,
    CULTURE,
    FOOD,
    ARTS,
    EDUCATION,
    ENTERTAINMENT
} 

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    city: City,
    category: Category,
    imageUrl: String,
    date: { type: Date, required: true},
    location: String,
    viewCount: Int = 0,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
