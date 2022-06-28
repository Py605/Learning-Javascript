const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs');
app.get('/' ,function(req,res){
  res.sendFile(__dirname+"/index.html")
})


app.post('/',function(req,res){
  request("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0e18886c150602cc9925a14586c7a549&hash=27d312585cb5f51e91b447e3d155a4d7",function(err,response,body)
  {
    var data = JSON.parse(body);
    var characters = [];
    for(var i = 0 ;i < data.data.results.length; i++){
      const name = data.data.results[i].name;
      const img = data.data.results[i].thumbnail.path + "/portrait_xlarge.jpg";

      var character = {
        name: name,
        url:img
      };
      if(!img.includes("image_not_available"))
        characters.push(character);
    }

    res.render('home',{
      characters : characters
    } );
  })
})

app.listen('3000',function(req,res){
  console.log("Server started at Port: 3000");
})

