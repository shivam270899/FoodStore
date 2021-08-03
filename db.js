const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://FoodStore:FoodStore@cluster0.czbv1.gcp.mongodb.net/FoodStore'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected', () => console.log("mongodb connection successfull"));

db.on('error', () => console.log("mongodb connection fail"));

module.exports = mongoose;