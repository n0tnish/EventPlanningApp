// server/routes/events.js
const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Create a new event
router.post('/create', async (req, res) => {
    const { name, date, location, description, coverPhoto } = req.body;
    const newEvent = await Event.create({ name, date, location, description, coverPhoto });
    res.status(201).json(newEvent);
});

// Get event by ID
router.get('/:id', async (req, res) => {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
});

module.exports = router;
