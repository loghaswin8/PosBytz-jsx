const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    topContent: {
        title: String,
        headline: String,
        description: String,
        buttonText: String,
        imageUrl: String
    },
    whereWeWork: [
        {
            img: String,
            title: String,
            about: String
        }
    ],
    coreValues: {
        about: [{ type: String }],
        icon: [
            {
                icon: String,
                Text: String
            }
        ],
        image: String
    },
    worklife: {
        about: [{ type: String }],
        activities: [{ Activity: String }],
        image: String
    },
    openPosition: [
        {
            img: String,
            title: String
        }
    ],
    principles: {
        title: String,
        description: [String],
        buttonText: String
    },
    funAtWork: {
        title: String,
        description: String,
        backgroundImage: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Career', careerSchema);
