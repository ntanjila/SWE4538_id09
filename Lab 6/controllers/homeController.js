const fs = require("fs");

sends = [];
recieves = [];
message = "nahida"

const getMessage = (req, res) => {
  const content = fs.readFileSync(__dirname + '/messages.txt', {encoding:'utf-8', flag:'r'}).toString().split(/\r?\n/);
  content.pop();
  let messages = [];
  content.forEach(element => {
    messages.push(JSON.parse(element));
  })
 // console.log(messages);
  return messages;
}

const getHome = (req, res) => {
  senders = fs.readFileSync("data/sender", { encoding: "utf-8" });
  receivers = fs.readFileSync("data/reciever", { encoding: "utf-8" });

  senders = JSON.parse(String(senders));
  receivers = JSON.parse(String(receivers));
  for (let key in senders) {
    sends.push(senders[key]);
  }
  for (let key in receivers) {
    recieves.push(receivers[key]);
  }
  // message = req.body.message;
    res.render('index', { title: 'Home' , senders:sends, receivers: recieves, messages: getMessage()});
    
  };
let sd;
  const postMessage = (req, res) => {
    sd = req.body.senders;
    // console.log(sd);
    let messageBody = JSON.stringify({
      sender: req.body.senders,
      receiver: req.body.receivers,
      message: req.body.message
    });
    messageBody += "\n";
    fs.appendFileSync(__dirname + '/messages.txt', messageBody);
    res.redirect('/');
  }
  
  const postFilter = (req, res) => {
    let filterBody = fs.readFileSync(__dirname + '/messages.txt', {encoding:'utf-8', flag:'r'}).toString().split(/\r?\n/);
    filterBody.pop();
  let fmessages = [];
  filterBody.forEach(element => {
    if(filterBody[sender].element===sd){
      fmessages.push(JSON.parse(element));
    }
   
  })
  console.log(fmessages);
    return filterBody;
  }
    
module.exports = {getHome, postMessage, postFilter};