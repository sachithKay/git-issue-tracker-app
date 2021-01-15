import Axios from 'axios';
const baseURL = `http://localhost:8280/git-api:1.0.0/`;

export default class ClientAPI {
    getHTTPClient() {
        let httpClient = Axios.create({
            baseURL: baseURL,
            timeout: 30000,
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

    getIssueSummary() {
        return this.getHTTPClient().get('/summary');
    }

    getIssueList() {
        return this.getHTTPClient().get('/issues');
    }
}