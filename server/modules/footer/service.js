const Footer = require('./model');

const getAllFooterData = async () => {
    return await Footer.find({});
};

const getFooterDataById = async (id) => {
    return await Footer.findById(id);
};

const addFooterData = async (data) => {
    const footer = new Footer(data);
    return await footer.save();
};

const updateFooterData = async (id, data) => {
    return await Footer.findByIdAndUpdate(id, data, { new: true });
};

// Service to delete footer data by ID
const deleteFooterData = async (id) => {
    return await Footer.findByIdAndDelete(id);
};

module.exports = {
    getAllFooterData,
    getFooterDataById,
    addFooterData,
    updateFooterData,
    deleteFooterData
};
