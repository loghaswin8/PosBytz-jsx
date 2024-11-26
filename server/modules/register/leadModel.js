const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    businessType: { type: String, required: true },
    countryCode: { type: String, required: true },
});

module.exports = mongoose.model('Lead', leadSchema);
