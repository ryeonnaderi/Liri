require("dotenv").config();
var request = require("request");
var fs = require("fs");

var key = require("./keys.js");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var userInput1 = process.argv[2];
var userInput2 = process.argv[3];

var spotify = new Spotify(key.spotify);

function spotifyThis(userInput2) {

    spotify.search({
        type: "track",
        query: userInput2,
    }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var songs = data.tracks.items;
            for (var k = 0; k < songs.length; k++) {
                
                console.log(songs[k].artists.map(function(artist){
                     return artist.name;
                 }));
                
                 console.log(songs[k].artist);
                  console.log(songs[k].name);
                 console.log(songs[k].album.name);
              

            }
            
            
        }
    });
   
}



console.log(userInput1, userInput2);

 function tweets() {

     var params = {
         screen_name: "NaderiRyeon",
        count: 5
    };
    //  defining personal credentials 
    var client = new Twitter(key.twitter);
    //  attempting to get our tweets
    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (error) {
            console.log("my error =>", error);

        } else {
            for (var i = 0; i < tweets.length; i++) {
                console.log("ryeon tweeted " + tweets[i].text + "at " + tweets[i].created_at);
            }
            // console.log(tweets);
            // console.log(tweets.length);
        }
    });

}
function movie(userInput2) {
    console.log("running movie function");
    var url = "http://www.omdbapi.com/?apikey=c19acea4&t=" + userInput2 + "&tomatoes=true"

    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var jsonData = JSON.parse(body);
            console.log(jsonData.Title);
            console.log(jsonData.Year);
            console.log(jsonData.Genre);
            console.log(jsonData.Language);
            console.log(jsonData.Country);
            // console.log(jsonData.Ratings[1].Value);

        } else if (error) {
            console.log(error);
        }
    });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        console.log(data);
        var dataArr = data.split(",");
        userInput1 = dataArr[0];
        userInput2 = dataArr[1];
        switchFunction(userInput1,userInput2);
    });
}

function switchFunction(userInput1,userInput2) {
    switch (userInput1) {
        case "my-tweets":
            tweets();
            break;
        case "spotify-this-song":
            spotifyThis(userInput2);
            break;
        case "movie-this":
            movie(userInput2);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("liri cant process this command");
    }
}
switchFunction(userInput1,userInput2);