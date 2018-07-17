require("dotenv").config();

var key = require("./keys.js");

var Spotify = require ("node-spotify-api");
var Twitter = require("twitter");

var spotify = new Spotify(key.spotify);
var client = new Twitter(key.twitter);

console.log(spotify);
console.log(client);