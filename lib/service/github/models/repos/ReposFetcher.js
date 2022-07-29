const { GithubMainFetcher } = require('../../GithubMainFetcher')

class ReposFetcher extends GithubMainFetcher {

    getAllRepos = async(token) => {

        const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': token}

        return this.get(`user/repos`, [true, headers], "", "").then((response) => {

            return response

        })

    }

}

module.exports = {
    ReposFetcher
}