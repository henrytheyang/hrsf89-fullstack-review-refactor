const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const github = require('../helpers/github.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('req.body = ', req.body)
  var searchTerm = req.body;
  // call the github helper, pass in res.send as a callback
  github.getReposByUsername(searchTerm, res.send) // Data sent back to client
  res.send('Server received request!'); 
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

