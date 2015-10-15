var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    homePhone: String,
    businessPhone: String,
    email: String,
    pnumber: String,
    accounts: [{
        number: String,
        description: String
    }],
    notes: [{
        text: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model('Client', ClientSchema);