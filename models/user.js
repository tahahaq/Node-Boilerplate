const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
    name : String,
    team_name : String,
    email:  String,
    blockstack_id : String
});

module.exports = mongoose.model("User", userSchema);
