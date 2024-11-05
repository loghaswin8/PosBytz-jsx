const Career = require('./model');

// Create new Career data
async function createCareerData(data) {
    const career = new Career(data);
    return await career.save();
}

// Get all Career data
async function getCareerData() {
    return await Career.find();
}

// Update Career data by ID
async function updateCareerData(id, data) {
    return await Career.findByIdAndUpdate(id, data, { new: true });
}

// Delete Career data by ID
async function deleteCareerData(id) {
    return await Career.findByIdAndDelete(id);
}

module.exports = {
    createCareerData,
    getCareerData,
    updateCareerData,
    deleteCareerData
};
