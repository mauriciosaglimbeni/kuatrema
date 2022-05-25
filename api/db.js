require('dotenv').config();
const mongoose = require('mongoose')
// local database uri mongodb://localhost/kuatrema
// mongodb Atlas database connection string.  
// Password is hidden by dotenv package, we hide a variable in .env which is only accesible in my local computer
const pass = process.env.KUATREMA_PASS;
mongoose.connect(`mongodb+srv://kuatremadmin:${pass}@kuatrema.aoxkz.mongodb.net/kuatrema?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// eslint-disable-next-line no-var
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback() {
  console.log('MongoDBAtlas Connected...')
})
module.exports = db

