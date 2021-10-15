const mongoose = require('mongoose');

const ResumeSchema = mongoose.Schema({
    name: String,
    link: String,
    major: String,
    tags: String,
    approved: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Resume', ResumeSchema);