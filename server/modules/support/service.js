const Support = require('./model');

// Create support data
exports.createSupportData = async (data) => {
    try {
        const supportData = new Support(data);
        return await supportData.save();
    } catch (error) {
        throw new Error('Error creating support data: ' + error.message);
    }
};

// Retrieve all support data
exports.getAllSupportData = async () => {
    try {
        return await Support.find({});
    } catch (error) {
        throw new Error('Error retrieving all support data: ' + error.message);
    }
};


// Update support data by ID
exports.updateSupportData = async (id, data) => {
    try {
        return await Support.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw new Error('Error updating support data: ' + error.message);
    }
};

// Delete support data by ID
exports.deleteSupportData = async (id) => {
    try {
        return await Support.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error deleting support data: ' + error.message);
    }
};
