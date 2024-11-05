const mongoose = require('mongoose');

// Define the intro schema as an object
const introSchema = {
    heading: { type: String, required: true },
    paragraph: { type: String, required: true },
    buttonText: { type: String, required: true },
    image: {
        src: { type: String, required: true },
        alt: { type: String, required: true },
    },
};

// Define the feature schema as an object
const featureSchema = {
    id: { type: String, required: true },
    name: { type: String, required: true },
    text: { type: [String], required: true },
    color: { type: String, required: true },
    buttonImgSrc: { type: String, required: true },
    contentImgSrc: { type: String, required: true },
};

// Define the video section schema as an object
const videoSectionSchema = {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
};

// Define the reason schema as an object
const reasonSchema = {
    id: { type: Number, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    borderColor: { type: String, required: true }
};

// Define the reasons section schema as an object
const reasonsSectionSchema = {
    mainTitle: { type: String, required: true },
    subtitle: { type: String, required: true },
    highlight: { type: String, required: true },
    reasons: [reasonSchema],
};

// Define the logo schema as an object
const logoSchema = {
    src: { type: String, required: true },
    alt: { type: String, required: true }
};

// Define the integrations schema as an object
const integrationsSchema = {
    title: { type: String, required: true },
    description: { type: String, required: true },
    logos: [logoSchema],
};

// Define the brand row schema as an object
const brandRowSchema = {
    image: { type: String, required: true }
};

// Define the brands schema as an object
const brandsSchema = {
    row1: [brandRowSchema],
    row2: [brandRowSchema],
    row3: [brandRowSchema],
};

// Define the tagline schema as an object
const taglineSchema = {
    title1: { type: String, required: true },
    title2: { type: String, required: true },
    description: { type: String, required: true },
    buttonText: { type: String, required: true },
};

// Define the testimonial schema as an object
const testimonialSchema = {
    img: { type: String, required: true },
    name: { type: String, required: true },
    text: { type: String, required: true },
};

// Define the ERP section schema as an object
const erpSectionSchema = {
    heading: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonLink: { type: String, required: true },
    imageSrc: { type: String, required: true },
    imageAlt: { type: String, required: true },
};

// Define the FAQ schema as an object
const faqSchema = {
    question: { type: String, required: true },
    answer: { type: String, required: true },
};

// Define the business section schema as an object
const businessSectionSchema = {
    heading: { type: String, required: true },
    buttonText: { type: String, required: true },
};

// Main Home Schema using the previously defined objects and adding timestamps
const homeSchema = new mongoose.Schema({
    intro: introSchema,
    features: [featureSchema],
    videoSection: videoSectionSchema,
    reasonsSection: reasonsSectionSchema,
    integrations: integrationsSchema,
    brands: brandsSchema,
    tagline: taglineSchema,
    testimonials: [testimonialSchema],
    erpSection: erpSectionSchema,
    faqData: [faqSchema],
    businessSection: businessSectionSchema,
}, { timestamps: true }); 

const Home = mongoose.model('Home', homeSchema);
module.exports = Home;
