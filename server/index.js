const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var fs = require('fs');

let cors = require("cors");
app.use(cors());

const questionnareData = require('./json/currentQuestionnare.json')
const newQuiz = require('./json/new.json')
const answer = require('./json/answer.json')

var jsonParser = bodyParser.json()

app.get("/currentQuiz", (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(questionnareData));
});

app.get("/answer", (req, res) => {
    res.header("Content-Type");
    res.send(JSON.stringify(answer));
});


app.post("/answer", jsonParser,(req, res) =>{

    var obj = require('./json/answer.json');

    obj.answers.push(req.body);

    fs.writeFile('./json/answer.json', JSON.stringify(obj), 'utf-8', function(err){
        if(err)
            return next(err);
        res.end();
    })
})

app.post("/new", jsonParser,(req, res) => {

    var objForNew = require('./json/new.json');

    objForNew.newSurveys.push(req.body);

   // gets users input and writes it to the new.json
    fs.writeFile("json/new.json", JSON.stringify(objForNew), 'utf8', function (err) {
        if (err)
            return next(err);
        res.end(); 
    })      
})

app.get("/new", (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(newQuiz));
});

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })