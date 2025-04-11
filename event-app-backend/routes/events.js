// It handles the RESTful API routes to manage the events. 

const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

const Cities = ['ATHENS', 'THESSALONIKI', 'PATRA', 'LARISSA'];
const Categories = ['MUSIC', 'SPORTS', 'CULTURE', 'FOOD', 'ARTS', 'EDUCATION', 'ENTERTAINMENT'];

// Get homepage
router.get('/', (req, res) => {
    const message = "Welcome to BookNGo APP! Check our events and book your tickets!"
    res.send(message);
});

// Get all events
router.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        if (!events) {
            return res.status(404).json({ message: 'Events not found' });
        }
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get details of an event by ID
router.get('/events/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET events by city (e.g., /events/Thessaloniki)
router.get('/events/:city', async (req, res) => {
    const city = req.params.city.toUpperCase();
    if (!Cities.includes(city)) {
      return res.status(400).json({ error: `Invalid city. Must be one of: ${Cities.join(', ')}` });
    }
  
    try {
      const cityEvents = await Event.find({ city });
      res.status(200).json(cityEvents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Get events by category (e.g., /events/category/MUSIC)
router.get('/events/Category/:categories', async (req, res) => {
    const category = req.params.categories.toUpperCase();
    if (!Categories.includes(category)) {
        return res.status(400).json({ error: `Invalid category. Must be one of: ${Categories.join(', ')}` });
      }
    try {
        const events = await Event.find({ category });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Post a new event
router.post('/events/post', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Put an event
router.put('/edit/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

// Delete an event
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        if (!deletedEvent) return res.status(404).json({ message: 'Event not found' });
        res.status(204).json({ message: 'Event deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;