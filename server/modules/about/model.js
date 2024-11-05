const mongoose = require('mongoose');

// Define the breadcrumb schema as an object
const breadcrumbSchema = {
    name: { type: String, required: true },
    link: { type: String, required: true }
};

// Define the hero section schema as an object
const heroSectionSchema = {
    title: { type: String, required: true },
    breadcrumbs: [breadcrumbSchema]
};

// Define the logo schema as an object
const logoSchema = {
    src: { type: String, required: true },
    alt: { type: String, required: true }
};

// Define the navbar schema as an object
const navbarSchema = {
    backgroundColorDefault: { type: String, required: true },
    backgroundColorScrolled: { type: String, required: true },
    linkColorDefault: { type: String, required: true },
    linkColorScrolled: { type: String, required: true },
    mainLogo: logoSchema,
    stickyLogo: logoSchema
};

// Define the about section item schema as an object
const aboutSectionItemSchema = {
    title: { type: String, required: true },
    description: [{ type: String, required: true }]
};

// Define the card schema as an object
const cardSchema = {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
};

// Define the how to reach schema as an object
const howToReachSchema = {
    title: { type: String, required: true },
    description: { type: String, required: true },
    cards: [cardSchema]
};

// Main About Schema using the previously defined objects
const aboutSchema = new mongoose.Schema({
    heroSection: heroSectionSchema,
    navbar: navbarSchema,
    aboutSection: [aboutSectionItemSchema],
    logos: {
        posBytz: logoSchema,
        bytize: logoSchema
    },
    productText: { type: String, required: true },
    howToReach: howToReachSchema
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('About', aboutSchema);
