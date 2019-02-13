// import mongoose and set up schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
{
  appname: "Hangman",
  description: "This is a simple word guessing game. Players try to figure out an unknown word by guessing letters. If too many letters which do not appear in the word are guessed, the player lose",
  image:"https://lh3.googleusercontent.com/-jmUK-vjMDVo/XD-X50W0Y2I/AAAAAAAAAhY/VPJEe4r5f0Af5tBbV0yIEgIKJ79e7V37ACL0BGAs/w663-d-h442-n-rw/back.jpeg",
  link: "https://modest-benz-4ea6bf.netlify.com"
}
*/

// set up app schema
const appSchema = new Schema({
  appname: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  shortDes:{
    type: String
  },
  link: {
    type: String
  },
  image: {
    type: String
  },
  saved: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// create app model using schema
const Apps = mongoose.model("Apps", appSchema);

// export model
module.exports = Apps;
