require("dotenv").config();

var key = require("./keys.js");


var Spotify = require("node-spotify-api");
var Twitter = require("twitter");


var spotify = new Spotify(key.spotify);
// // spotify.request("https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx'")

// // .then(function(data){
// //     console.log(data);
// // }).catch(function(err)
// // {
// //     console.log("error occurred" + err);
// // });





// spotify.search({type:"track",query:"My search query", })
// .catch(function(err){
//     console.log(err);
// });
// .then (function(responses)







 var params = {screen_name: "nodejs"};
//  defining personal credentials 
 var client = new Twitter(key.twitter);   
//  attempting to get our tweets
client.get("https://www.twitter.com/NaderiRyeon/" ,params,function (error, tweets,response) {
        if (error) {
            console.log("my error =>", error);
            
        } else {
            console.log(tweets.length);
        }
    });






 

 
