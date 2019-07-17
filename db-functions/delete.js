var exports = module.exports = {},
    constants = require('../utils/constant');


// exports.rejectInvitation = async (userId ,eventId ) => {
//     try {
//         let user = await userModel.findById(userId);
//         if (!user) {
//             throw new Error("No user found with given ID");
//         }
//         let event = await eventModel.findById(eventId);
//         if (!event) {
//             throw new Error("No event found with given ID");
//         }
//         let index = await user.invitations.event.indexOf(eventId);
//         if (index > -1) {
//             user.invitations.event.splice(index, 1);
//             user.invitations.sender.splice(index, 1)
//         }
//         await user.save();
//
//         return true;
//     }  catch (e) {
//         console.log(e);
//         throw new Error(e)
//     }
// };
//
//
// exports.deleteInterestedEvent= async (userId ,eventId ) => {
//     try {
//         let user = await userModel.findById(userId);
//         if (!user) {
//             throw new Error("No user found with given ID");
//         }
//         let index = await user.interested_events.indexOf(eventId);
//         if (index > -1) {
//             user.interested_events.splice(index, 1);
//         }
//         await user.save();
//
//         return true;
//     }  catch (e) {
//         console.log(e);
//         throw new Error(e)
//     }
// };
//
//
// exports.deleteEventByAdmin = async (eventId , adminId) => {
//     try {
//         let event = await  eventModel.findById(eventId);
//         let admin = await adminModel.findOne({email : constants.admin_email});
//
//         if(admin._id.toString() !== adminId){
//             throw new Error("Admin authentication error");
//         }
//
//         let eventDeleted = await  eventModel.findByIdAndRemove(eventId);
//         let users = await  userModel.find({});
//
//         // Iterating over users to delete the interested event and invites
//         for (let i = 0; i < users.length ;  i++) {
//             let interestedEventIndex = await users[i].interested_events.indexOf(eventId);
//             let invitesIndex = await users[i].invitations.event.indexOf(eventId);
//             if (interestedEventIndex > -1) {
//                 users[i].interested_events.splice(interestedEventIndex, 1);
//             }
//             if(invitesIndex > -1){
//                 users[i].invitations.event.splice(invitesIndex, 1);
//                 users[i].invitations.sender.splice(invitesIndex, 1)
//             }
//             if(invitesIndex !== -1 || interestedEventIndex !== -1){
//                 users[i].save()
//             }
//         }
//
//         return constants.responseMessages.Success;
//     }  catch (e) {
//         console.log(e);
//         throw new Error(e)
//     }
// };
//
// exports.deleteEvent = async (eventId , ownerId) => {
//     try {
//         let event = await  eventModel.findById(eventId);
//         if (event.user.id !== ownerId) {
//             throw new Error("Invalid owner");
//         }
//
//         let eventDeleted = await  eventModel.findByIdAndRemove(eventId);
//
//         let users = await  userModel.find({});
//
//         // Iterating over users to delete the interested event and invites
//         for (let i = 0; i < users.length ;  i++) {
//             let interestedEventIndex = await users[i].interested_events.indexOf(eventId);
//             let invitesIndex = await users[i].invitations.event.indexOf(eventId);
//             if (interestedEventIndex > -1) {
//                  users[i].interested_events.splice(interestedEventIndex, 1);
//             }
//             if(invitesIndex > -1){
//                 users[i].invitations.event.splice(invitesIndex, 1);
//                 users[i].invitations.sender.splice(invitesIndex, 1)
//             }
//             if(invitesIndex !== -1 || interestedEventIndex !== -1){
//                 users[i].save()
//             }
//         }
//
//         return constants.responseMessages.Success;
//     }  catch (e) {
//         console.log(e);
//         throw new Error(e)
//     }
// };
//
// exports.deleteHangoutPlaceEvent= async (hangoutId , eventId) => {
//     try {
//         let hangout = await hangoutModel.findById(hangoutId);
//         if(!hangout){
//             throw new Error("Invalid hangout Id")
//         }
//         let index = await hangout.event.indexOf(eventId);
//         if(index > -1){
//             hangout.event.splice(index,1);
//         }
//         await hangout.save();
//         let event = await  eventModel.findByIdAndRemove(eventId);
//         if(!event){
//             throw new Error("Invalid event Id")
//         }
//         return constants.responseMessages.Success
//     }  catch (e) {
//         console.log(e);
//         throw new Error(e)
//     }
// };
//
//
// exports.deleteUserByAdmin = async (userId , adminId) => {
//     try {
//         let admin = await adminModel.findOne({email : constants.admin_email});
//         if(admin._id.toString() !== adminId){
//             throw new Error("Admin authentication error");
//         }
//
//         let user = await  userModel.findByIdAndRemove(userId);
//         if(!user){
//             throw new Error("No user found with given Id");
//         }
//         return constants.responseMessages.Success
//     }  catch (e) {
//         console.log(e);
//         throw new Error(e)
//     }
// };
//

exports.deleteContact= async (id) => {
    try {
        let contacts = await contactModel.find({});
        if(contacts.length === 1){
            throw new Error("Can't delete. Please add one contact first then delete this one!")
        }
        await  contactModel.findByIdAndRemove(id);
        return constants.responseMessages.productRemoved;

    }  catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.deleteProduct= async (id) => {
    try {
        await  productModel.findByIdAndRemove(id);
        return constants.responseMessages.productRemoved;

    }  catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

//
//
// exports.deleteFeaturedPlace = async (placeId) => {
//     try {
//        let featuredShortData = await  foodFeaturedModel.findByIdAndRemove(placeId);
//         await  foodFeaturedDetailModel.findByIdAndRemove(featuredShortData.featured_detail_id);
//         return featuredShortData.name
//     }  catch (e) {
//         console.log(e);
//         throw new Error(e)
//     }
// };
