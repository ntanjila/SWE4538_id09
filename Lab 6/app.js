const express = require("express"); //Includes the express library
const app = express(); //Creates an Express Application
const router = require("./router");
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false})) ;
app.use(express.static("public"));

app.set("view engine", "ejs"); // Setting EJS as template engine

app.set("views", __dirname + "/views"); // Setting the directory for the view files

app.use(router); // Router Middleware

app.listen(port, function () {
  //starts up the server on a specified port ('3000')
  console.log(`Example app listening on port ${port}!`);
});
