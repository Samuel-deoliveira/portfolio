const {ReposFetcher} = require('../models/repos/ReposFetcher')
require('dotenv').config()

var test = new ReposFetcher()

const t = () => {

}



test.getAllRepos(process.env.github_token).then(response => console.log(response))

