const request = require('request');
const config = require('../config.js');

let getReposByUsername = (searchTerm, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${searchTerm}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  console.log('options.url = ', options.url)
  request(options, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    if (body === []) {
      console.log('empty return');
    } else {
      // console.log('body:', body);
      // console.log('github helper typeof body = ', typeof body)
      // console.log('typeof body =', typeof body)
      // console.log('jsonparsed body = ', JSON.parse(body));
      callback(JSON.parse(body));
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;