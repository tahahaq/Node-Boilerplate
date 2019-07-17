var exports = module.exports = {},
    constants = require('../utils/constant'),
    userModel = require ('../models/user');

exports.insertParticipant = async (participant) => {
    try {
        await participantModel.create(participant);
        return constants.responseMessages.participantCreated;
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};
