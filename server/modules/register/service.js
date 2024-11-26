const Lead = require('./leadModel');
const User = require('./userModel');
const bcrypt = require('bcryptjs');

// Create both Lead and User in a single operation
exports.createLeadAndUser = async (leadData, userData) => {
    try {
        const lead = new Lead({
            email: leadData.email,
            phone: leadData.phone,
            businessType: leadData.businessType,
            countryCode: leadData.countryCode,
        });
        await lead.save();

        const newUser = new User({
            email: userData.email,
            phone: userData.phone,
            password: await bcrypt.hash(userData.password, 10),
            leadId: lead._id,
        });
        await newUser.save();

        return { lead, user: newUser };
    } catch (error) {
        throw new Error('Error creating lead and user: ' + error.message);
    }
};

// Fetch all users
exports.getAllUsers = async () => {
    try {
        // Retrieve all users from the database
        return await User.find({}, 'email phone password leadId'); // Exclude other fields if not needed
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
};
