require("dotenv").config();
client.post("status/update",{status:"I lose Twitter"},function(error,tweet,response){
    if(error)
    {
    return(error);
    }
    console.log(tweet);
    console.log(response);
});