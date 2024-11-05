const mongoose = require('mongoose');

const navbarSchema = {
    backgroundColorDefault: { type: String, required: true },
    backgroundColorScrolled: { type: String, required: true },
    linkColorDefault: { type: String, required: true },
    linkColorScrolled: { type: String, required: true }
};

const breadcrumbSchema = {
    name: { type: String, required: true },
    link: { type: String, required: true }
};

const heroSectionSchema = {
    title: { type: String, required: true },
    breadcrumbs: [breadcrumbSchema] 
};

// Define the header schema as an object
const headerSchema = {
    title: { type: String, required: true },
    description: { type: String, required: true }
};

const formPlaceholdersSchema = {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    phone: { type: String, required: true }
};

const contactSchema = new mongoose.Schema({
    navbar: navbarSchema,                
    heroSection: heroSectionSchema,       
    header: headerSchema,                
    formPlaceholders: formPlaceholdersSchema,
    submitButton: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
