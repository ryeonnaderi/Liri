
var twitter = require("twitter");

exports.twitter = 
{
    consumer_key:process.env.TWITTER_CONSUMER_KEY,
    consumer_secrets:Process.env.TWITTER_CONSUMER_SECRETS,
    access_token_key:process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secretsL:TWITTER_ACCESS_TOKEN_SECRET
};



exports.spotify = 
{
    id:process.env.SPOTIFY_ID,
    secret:process.env.SPOTIFY_SECRETS
};



var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);






// var request = require("request");
// request("http:/www.omdbapi.com",function(error, response, body ){
//     if(error)
//     {
//         console.log("error");
//         console.log("status code:", response);
        
//     }
// });



