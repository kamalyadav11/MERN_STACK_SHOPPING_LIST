const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

//Body-Parser Middleware
app.use(bodyParser.json());

//DB Config
var db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('Connected MongoDB Baby'))
  .catch(err => console.log('Some Error Ocurred ' + err));
  // Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// var db = mongoose.connection;

app.get('/', (req, res) => {
  res.send("Hello Express World!");
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
