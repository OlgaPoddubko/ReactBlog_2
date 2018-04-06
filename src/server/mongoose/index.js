const mongoose = require('mongoose');

const uri = 'mongodb://admin:adminpass@ds235169.mlab.com:35169/blog';
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connection success');
});

module.exports = mongoose;
