const fs = require("fs");

//app.use(bodyParser.urlencoded({extended:false}));

const getForm = (req, res) => {
  
  form = fs.readFileSync("data/form", { encoding: "utf-8" });
  form = JSON.parse(String(form));
  res.render("form", {form});
};

const postForm = (req, res) =>{
  form = fs.readFileSync("data/form", { encoding: "utf-8" });
  formInfo = JSON.parse(String(formInfo));
  console.log(formInfo)
  
    res.render('submit',{name: formInfo})
  
}



module.exports = {postForm: postForm};

module.exports = { getForm: getForm };