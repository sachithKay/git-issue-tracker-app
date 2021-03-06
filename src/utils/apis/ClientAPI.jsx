import Axios from 'axios';

const https = require('https');

const baseURL = 'https://localhost:8243/git-issues/1.0.0';
const httpsAgent = new https.Agent({rejectUnauthorized: false});

export default class ClientAPI {
    getHTTPClient(bearer) {

        let httpClient = Axios.create({
            baseURL: baseURL,
            timeout: 30000,
            httpsAgent: httpsAgent,
            headers: {"Authorization": `Bearer ${bearer}`, 'Content-Type': 'application/x-www-form-urlencoded'}
        });
        httpClient.defaults.headers.post['Content-Type'] = 'application/json';
        httpClient.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if (401 === error.response.status) {
                    window.alert('Authorization failed.')
                }
            }
            return Promise.reject(error);
        });
        return httpClient;
    }

    getIssueSummary(bearer) {
        return this.getHTTPClient(bearer).post('/summary');
    }

    getIssueList(bearer) {
        return this.getHTTPClient(bearer).get('');
    }
}