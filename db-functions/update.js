var exports = module.exports = {},
    constants = require('../utils/constant');

exports.updateParticipant = async (data) => {
    try {
        if(!data.blockstack_id || !data.email){
            throw new Error("Name, email or blockstack id not passed");
        }
        let participant = await participantModel.findOne({email :data.email});
        if(participant.blockstack_id){
            throw new Error("Blockstack Id already exists")
        }
        if(participant){
            await participantModel.findByIdAndUpdate(participant._id ,data);
            return constants.responseMessages.participantUpdated;
        }
        throw new Error("Participant Email ID not found");
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.updateTeamName = async () => {
        try {
            let partcipant = await participantModel.find({});
            for (let i = 0 ; i < partcipant.length ; i++) {
                let name = partcipant[i].name;
                let certificate =await certificateModel.find({receiver_name: name});
                console.log(certificate)
                for (let j = 0 ; j < certificate.length ; j++) {
                    console.log(j)
                    certificate[j].team_name = partcipant[i].team_name;
                   await certificate[j].save();
                }

            }
        }catch (e) {

        }
};

exports.updateContactDetails = async (id, contact) => {
    try {
        await contactModel.findByIdAndUpdate(id,contact);
        return constants.responseMessages.contactDetailsUpdated;
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.updateProduct = async (id, product) => {
    try {
        await productModel.findByIdAndUpdate(id,product);
        return constants.responseMessages.Success
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};
