var request = require("request");
request("http:/www.omdbapi.com",function(error, response, body ){
    if(error)
    {
        console.log("error");
        console.log("status code:", response);
        
    }
});
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);