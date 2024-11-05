const express = require('express');
const router = express.Router();
const contactService = require('./service');

router.post('/', async (req, res) => {
    try {
        const contactData = await contactService.createContactData(req.body);
        res.status(201).json(contactData);
    } catch (error) {
        console.error("Failed to create contact data:", error.message);
        res.status(400).json({ error: "Failed to create contact data" });
    }
});

router.get('/', async (req, res) => {
    try {
        const contactData = await contactService.getAllContactData();
        if (!contactData || contactData.length === 0) {
            return res.status(404).json({ message: "No contact data found" });
        }
        res.json(contactData);
    } catch (error) {
        console.error("Error retrieving contact data:", error.message);
        res.status(500).json({ error: "Error retrieving contact data" });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const contactData = await contactService.getContactDataById(req.params.id);
        if (!contactData) {
            return res.status(404).json({ message: "Contact data not found" });
        }
        res.json(contactData);
    } catch (error) {
        console.error("Error retrieving contact data:", error.message);
        res.status(500).json({ error: "Error retrieving contact data" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedContactData = await contactService.updateContactData(req.params.id, req.body);
        if (!updatedContactData) {
            return res.status(404).json({ message: "Contact data not found" });
        }
        res.json(updatedContactData);
    } catch (error) {
        console.error("Failed to update contact data:", error.message);
        res.status(400).json({ error: "Failed to update contact data" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedContactData = await contactService.deleteContactData(req.params.id);
        if (!deletedContactData) {
            return res.status(404).json({ message: "Contact data not found" });
        }
        res.json({ message: "Contact data deleted successfully" });
    } catch (error) {
        console.error("Failed to delete contact data:", error.message);
        res.status(500).json({ error: "Failed to delete contact data" });
    }
});

module.exports = router;
