const axios = require('axios');

export default class WakatimeMainFetcher {

    apiUrl = "https://wakatime.com"

    urlBuilder(subUrl) {
        return `${this.apiUrl}/${subUrl}`
    }

    get = async(url, [check, headers], params, data) => {

        var responseJson

        check ? headers : headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }

        return await axios({method: 'get', url: this.urlBuilder(url), params: params, data: data, headers: headers}).then((result) => {

            responseJson = { "result": result.data, "status": result.status }

            return responseJson

        }).catch((err) => {

            responseJson = { "result": err.response.data, "status": err.response.status }

            return responseJson

        })

    }

} 