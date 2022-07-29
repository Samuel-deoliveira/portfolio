const {ReposFetcher} = require('./lib/service/github/models/repos/ReposFetcher')
const config = require('./config')
const test = new ReposFetcher()


test.getAllRepos(config.github_token).then((response) => {

    console.log("--------------------")
    console.log(response.result.length)
    console.log("--------------------")
    
    for(let i = 0; i < response.result.length; i++) {
        if (response.result[i].private === false) {
            if (response.result[i].name === "portfolio") console.log(response.result[i])
        }
    }
})