var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db:'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://frobison:multivision@ds145168.mlab.com:45168/testmulti',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}