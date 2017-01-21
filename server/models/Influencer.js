var mongoose = require('mongoose');

var influencerSchema = mongoose.Schema({
    firstname: {type:String, required: '{PATH} is required'},
    lastname: {type:String, required: '{PATH} is required'},
    industry: {type:String, required: '{PATH} is required'},
    website: {type:String, required: '{PATH} is required'},
    tags: [String],
    twitter: {type:String, required: '{PATH} is required' }
});
var Influencer = mongoose.model('Influencer', influencerSchema);

function createDefaultInfluencers(){
    Influencer.find({}).exec(function(err, collection){
        if(collection.length === 0){
                    Influencer.create({firstname: 'Marc', lastname: 'Andreessen', industry: 'Venture Capital', website:'http://a16z.com/', tags: ['VC','Netscape'], twitter: 'https://twitter.com/pmarca'});

        }
    })
}

exports.createDefaultInfluencers = createDefaultInfluencers;