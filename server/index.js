const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var fs = require('fs');

let cors = require("cors");
app.use(cors());

const questionnareData = require('./json/currentQuestionnare.json')
const newQuiz = require('./json/new.json')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/api", (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(questionnareData));
});


app.post("/new", jsonParser,(req, res) => {
   // gets users input and writes it to the new.json
    fs.writeFile("json/new.json", JSON.stringify(req.body), 'utf8', function (err) {
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