const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.PORT || 5000;

const items = require("./routes/api/items");

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//Body-Parser Middleware
app.use(bodyParser.json());

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("Connected MongoDB Baby"))
  .catch(err => console.log(`Some Error Ocurred ${err}`));
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// var db = mongoose.connection;

//Use Routes
app.use("/api/items", items); //first argument is the path and second is the file name defined above

//Serve static assests if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
