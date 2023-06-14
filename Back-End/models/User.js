const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    avatar: {
        type: String,
        default: 'uploads/default.png'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Users', userSchema);