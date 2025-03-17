const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ eroor: err.message });
    }
});

// Get a single event by ID
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({message: 'Event not found' });
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Post (Create) a new event
router.post('/post/', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Put (Update) an event
router.put('/edit/:id', async (req, res) => {
    try {
        const updateEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });
        res.json(updatedEvent);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
});

// Delete an event
router.delete('/delete/:id', async (req, res) => {
    try {
        const deleteEvent = await Event.findByIdAndDelete(req.params.id);
        if (!deletedEvent)return res.status(404).json({ message: 'Event not found' });
        res.json({ message: 'Event deleted successfully!' });
    } catch {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;