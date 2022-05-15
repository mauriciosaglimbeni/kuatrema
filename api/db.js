const mongoose = require('mongoose');
// mongodb database connection string.  mongoose creates the mongo db automatically.
mongoose.connect('mongodb://localhost/kuatrema', {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false,
                            useCreateIndex: true
                          });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});
module.exports = db