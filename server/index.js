const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const github = require('../helpers/github.js');
const mongoHelper = require('../database/index.js')


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
  // var mongoHelperSave = mongoHelper.save;
  // github.getReposByUsername(searchTerm, (docs) => {
  //   // console.log('back from api to server');
  //   console.log('im in the github helper now')
  //   // Pass in save to mongo as a callback
  //   mongoHelper.save(docs)
  //     // pass in res.send as a callback to that
  // });
  github.getReposByUsername(searchTerm, (docs) => {
    // console.log('back from api to server');
    console.log('im in the github helper now')
    // Pass in save to mongo as a callback
    mongoHelper.save(docs, (fromDB) => {
      // console.log('hi inside save invoke on server')
      console.log('server fromDB = ', fromDB)
      res.send(fromDB);
  })
    // pass in res.send as a callback to that
});
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  fetch(res.send);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

