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

const helpButtonSchema = {
    text: { type: String, required: true },
    link: { type: String, required: true }
};

const helpSchema = {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    button: helpButtonSchema
};

const kindOfHelpSchema = {
    img: { type: String, required: true },
    title: { type: String, required: true },
    about: { type: String, required: true },
    buttonText: { type: String, required: true }
};

const helpKindDataSchema = {
    heading: { type: String, required: true },
    paragraph: { type: String, required: true },
    Kindofhelp: [kindOfHelpSchema]
};

const whatsappSchema = {
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    buttonText: { type: String, required: true }
};

const supportSchema = new mongoose.Schema({
    navbar: navbarSchema,
    heroSection: heroSectionSchema,
    help: [helpSchema],
    helpKindData: helpKindDataSchema,
    whatsapp: whatsappSchema,
}, { timestamps: true }); 

module.exports = mongoose.model('Support', supportSchema);
