const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  stargazers_count: Number,
  full_name: {type: String, unique: true,},
  avatar_url: String,
  html_url: String,
  forks: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (arrInput) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // console.log('in save now');
  // console.log('arrInput type = ', typeof arrInput)
  // console.log('arrInput = ', arrInput)
  arrInput.forEach((element) => {
    var currentItem = new Repo({
                                stargazers_count: element.stargazers_count,
                                full_name: element.full_name,
                                avatar_url: element.avatar_url,
                                html_url: element.html_url,
                                forks: element.forks,
                              });
    currentItem.save((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Doc saved!!!');
        console.log('Doc saved = currentItem = ', currentItem)
      }
    })
  })
}

module.exports.save = save;