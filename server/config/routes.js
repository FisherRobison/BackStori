var auth = require('./auth'),
    users = require('../controllers/users'),
    influencers = require('../controllers/influencers'),
    courses = require('../controllers/courses'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(app){
    
app.get('/api/users', auth.requiresRole('admin'), users.getUsers);    
app.post('/api/users', users.createUser);
app.put('/api/users', users.updateUser);

app.get('/api/influencers', influencers.getInfluencers);
app.post('/api/influencers/create', influencers.createInfluencers);
app.get('/api/influencers/:id', influencers.getInfluencerById);


app.get('/api/courses', courses.getCourses);
app.get('/api/courses/:id', courses.getCourseById);


app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
});

app.post('/login', auth.autheticate);

app.post('/logout', function(req, res){
  req.logout();
  res.end();
});

app.all('/api/*', function(req,res){
  res.send(404);
})

app.get('*', function(req, res) {
  res.render('index', {
    bootstrappedUser: req.user
  });
});


}