const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("Hello");
});

app.get("/contact", function(request, response){
    response.send("contact me at: guptahimanshu9813@gmail.com");
});

app.get("/about", function(request, response){
    response.send("I am a programmer");
});

app.listen(3000, function(){
   console.log("server started on port 3000"); 
});