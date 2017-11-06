const mongoose = require('mongoose');
const shortid = require('shortid');

// Allowed characters
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

// Schema
const linkSchema = new mongoose.Schema({
  original_link: { type: String, required: true },
  short_link: { type: String, 'default': shortid.generate, unique: true, required: true },
  time: { type : Date, default: new Date().getTime() },
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
