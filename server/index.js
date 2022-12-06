const express = require('express')
const app = express()

let cors = require("cors");
app.use(cors());

const questionnareData = require('./json/currentQuestionnare.json')

app.get("/api", (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(questionnareData));
});

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })