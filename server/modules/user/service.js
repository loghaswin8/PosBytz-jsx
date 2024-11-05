const User = require('./model'); 

// Create a new user
async function createUser(data) {
    return await User.create(data);
}

// Retrieve all users
async function getAllUsers() {
    return await User.find({});
}

// Retrieve a single user by ID
async function getUserById(id) {
    return await User.findById(id);
}

// Update a user by ID
async function updateUser(id, data) {
    return await User.findByIdAndUpdate(id, data, { new: true });
}

// Delete a user by ID
async function deleteUser(id) {
    return await User.findByIdAndDelete(id);
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
