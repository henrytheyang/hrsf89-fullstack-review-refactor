const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const github = require('../helpers/github.js');
const mongoHelp = require('../database/index.js')


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('req.body = ', req.body)
  var searchTerm = req.body;
  // call the github helper
  github.getReposByUsername(searchTerm, (err, data) => { 
    // console.log('back from api to server');
    console.error('err = ', err)
    console.log('data = ', data)
    mongoHelp.save;
    // Pass in save to mongo as a callback
      // pass in res.send as a callback to that
       // res.send()
  }); // Data sent back to client
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

