const Navbar = require('./model');

// Service to get all navbar data
const getAllNavbarData = async () => {
    return await Navbar.find({});
};

// Service to get navbar data by ID
const getNavbarDataById = async (id) => {
    return await Navbar.findById(id);
};

// Service to add navbar data
const addNavbarData = async (data) => {
    const navbar = new Navbar(data);
    return await navbar.save();
};

// Service to update navbar data by ID
const updateNavbarData = async (id, data) => {
    return await Navbar.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

// Service to delete navbar data by ID
const deleteNavbarData = async (id) => {
    return await Navbar.findByIdAndDelete(id);
};

module.exports = {
    getAllNavbarData,
    getNavbarDataById,
    addNavbarData,
    updateNavbarData,
    deleteNavbarData
};
