const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    writerId: {
        type: String,
        required: true
    },
    image:{
        type : String,
        default: 'uploads/post.png'
    },
    readTime: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Posts', postSchema);