const mongoose = require('mongoose');

const footerSchema = new mongoose.Schema({
  footerData: [
    {
      heading: { type: String, required: true },
      items: [{ type: String, required: true }]
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Footer', footerSchema);
