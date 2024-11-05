const Contact = require('./model');

exports.createContactData = async (data) => {
    try {
        const contactData = new Contact(data);
        return await contactData.save();
    } catch (error) {
        throw new Error('Error creating contact data: ' + error.message);
    }
};

exports.getAllContactData = async () => {
    try {
        return await Contact.find();
    } catch (error) {
        throw new Error('Error retrieving all contact data: ' + error.message);
    }
};

exports.getContactDataById = async (id) => {
    try {
        return await Contact.findById(id);
    } catch (error) {
        throw new Error('Error retrieving contact data by ID: ' + error.message);
    }
};

exports.updateContactData = async (id, data) => {
    try {
        return await Contact.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw new Error('Error updating contact data: ' + error.message);
    }
};

exports.deleteContactData = async (id) => {
    try {
        return await Contact.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error deleting contact data: ' + error.message);
    }
};
