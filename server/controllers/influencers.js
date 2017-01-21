var Influencer = require('mongoose').model('Influencer');


exports.getInfluencers = function(req, res, next){
 Influencer.find({}).exec(function(err, collection){
        res.send(collection);
    })
}

exports.getInfluencerById = function(req, res){
    Influencer.findOne({_id:req.params.id}).exec(function(err, influencer){
        res.send(influencer);
    })
}

exports.createInfluencers = function(req, res, next){
    var lemonInfluencer = new Influencer(req.body);
  lemonInfluencer.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
  })
//Influencer.create({firstname: req.body.firstname, lastname: 'Andreessen', industry: 'Venture Capital', website:'http://a16z.com/', tags: ['VC','Netscape'], twitter: 'https://twitter.com/pmarca'});

/*Influencer.create({firstname: 'purple', lastname: 'Andreessen', industry: 'Venture Capital', website:'http://a16z.com/', tags: ['VC','Netscape'], twitter: 'https://twitter.com/pmarca'});

 newInfluencer.firstname
    newInfluencer.lastname
    newInfluencer.industry
    newInfluencer.website
    newInfluencer.twitter
*/
//firstname: 'lemons', lastname: 'Andreessen', industry: 'Venture Capital', website:'http://a16z.com/', tags: ['VC','Netscape'], twitter: 'https://twitter.com/pmarca'
/*Influencer.create({newInfluencer})
, function(err) {
    if(err) {
      res.status(400);
      return res.send({reason:err.toString()});
    }
    }
    */


}