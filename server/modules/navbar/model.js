const mongoose = require('mongoose');

const navbarSchema = new mongoose.Schema({
  navbarItems: [
    {
      path: { type: String, required: true },
      label: { type: String, required: true }
    }
  ],
  companyDropdownItems: [
    {
      path: { type: String, required: true },
      label: { type: String, required: true }
    }
  ],
  exploreDropdownItems: [
    {
      label: { type: String, required: true }
    }
  ],
  partnerDropdownItems: [
    {
      label: { type: String, required: true }
    }
  ],
  languageDropdownItems: [
    {
      label: { type: String, required: true }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Navbar', navbarSchema);

