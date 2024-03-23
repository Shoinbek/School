const mongoose = require('mongoose');

const {Schema} = mongoose; 

const TourSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    tourDateTime: {type: Date, required: true},
    areaOfInterest: {type: String, required: true},
    state: {type: String, required: true},
    // Additional comment section will go here

});

const TourSignUpMembers = mongoose.model('tour-members', TourSchema);

module.exports = TourSignUpMembers;
 

               