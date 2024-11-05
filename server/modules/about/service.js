const About = require('./model');

const getAboutData = async () => {
    return await About.findOne();
};

const createAboutData = async (data) => {
    const about = new About(data);
    return await about.save();
};

const updateAboutData = async (id, data) => {
    return await About.findByIdAndUpdate(id, data, { new: true });
};

const deleteAboutData = async (id) => {
    return await About.findByIdAndDelete(id);
};

module.exports = {
    getAboutData,
    createAboutData,
    updateAboutData,
    deleteAboutData
};
