const Home = require('./model');

const addHomeData = async (homeData) => {
    const newHome = new Home(homeData); 
    await newHome.save(); 
    return newHome; 
};

const getAllHomeData = async () => {
    return await Home.find(); 
};

const getHomeDataById = async (id) => {
    return await Home.findById(id); 
};

const updateHomeData = async (id, updatedData) => {
    return await Home.findByIdAndUpdate(id, updatedData, { new: true }); 
};

const deleteHomeData = async (id) => {
    return await Home.findByIdAndDelete(id);
};

module.exports = {
    addHomeData,
    getAllHomeData,
    getHomeDataById,
    updateHomeData,
    deleteHomeData
};
