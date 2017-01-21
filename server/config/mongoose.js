var mongoose = require('mongoose'),
    courseModel = require('../models/Course'),
    influencerModel = require('../models/Influencer'),
    userModel = require('../models/User');

module.exports = function(config){
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('multivision db opened');
});

userModel.createDefaultUsers();
courseModel.createDefaultCourses();
influencerModel.createDefaultInfluencers();

var videoSchema = mongoose.Schema({
  title: String, 
  body: String,
  url: String,
 
});

var Video = mongoose.model('Video', videoSchema);

Video.find({}).exec(function(err,collection){
  if(collection.length === 0){
Video.create({title: 'yelloman',body:'Tim ferris is the bestest', url: 'https://www.youtube.com/watch?v=swa2ni6DjlA'});
  }
});



};

