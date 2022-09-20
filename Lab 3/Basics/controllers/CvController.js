const fs = require("fs");
var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({extended:false}));
formInfo = "nahida"
edus = [];

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  formInfo = req.body.name;
  console.log(formInfo)

  for (let key in educations) {
    edus.push(educations[key]);
  }
  res.redirect("/");
};

const sendCV = (req, res) => {
  
  res.render("cv",{name:formInfo, educations: edus} )
};


module.exports = { sendCV, getCV: sendCV, getCV };
