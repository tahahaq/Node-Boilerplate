var exports = module.exports = {},
    utilsFunctions = require('../utils/functions'),
    constants = require('../utils/constant');

exports.count = 0 ;

exports.getCertificateCount = async () => {
    return exports.count;
};

exports.ifParticipantExist= async (blockstack_id) => {
    try {
        let participant = await participantModel.findOne({blockstack_id});
        if(participant){
            return true;
        }
        return false
    }  catch (e) {
        console.log(e);
        throw new Error(e);
    }
};
exports.getParticipants= async () => {
    try {
        return await participantModel.find({});
    }  catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

exports.getCertificates= async () => {
    try {
        let certificates =  await certificatesModel.find({});
        let returnedCertificates = [];
        for ( let i = 0 ; i< certificates.length; i++){
            let singleCert = certificates[i].toObject();
            delete singleCert.__v;
            returnedCertificates.push(singleCert);
        }
        return returnedCertificates;
    }  catch (e) {
        console.log(e);
        throw new Error(e);
    }
};


exports.getCertificateByBlockstackId= async (blockstack_id) => {
    try {
        let certificates =  await certificatesModel.find({blockstack_id});
        if(certificates.length <1){
            throw new Error("No certificates found")
        }
        let returnedCertificates = [];
        for ( let i = 0 ; i< certificates.length; i++){
            let singleCert = certificates[i].toObject();
            delete singleCert.__v;
            returnedCertificates.push(singleCert);
        }
        return returnedCertificates;
    }  catch (e) {
        console.log(e);
        throw new Error(e);
    }
};


exports.getCertificateById = async (id) => {
    try {
        exports.count++;
        let data  = await certificatesModel.findById(id);
        let certificate = data.toObject();
        delete certificate.__v;
        return certificate;

    }  catch (e) {
        console.log(e);
        throw new Error(e);
    }
};
