import Axios from 'axios';
const https = require('https');

const tokenAPIUrl = 'https://localhost:8243/token';
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export default class AccessAPI {

    getHTTPClient() {
        let httpClient = Axios.create({
            baseURL: tokenAPIUrl,
            timeout: 30000,
            httpsAgent: httpsAgent,
            headers: {"Authorization": "Basic S19hMENoX2ZfTVFfNkpxZWN2QUJQeDlCb3ZJYTpWTmc2bDlubW9aVHRUTXdza2ZVcTFMOTVpYmth", 'Content-Type': 'application/x-www-form-urlencoded'}
        });
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

    getAccessToken() {
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        return this.getHTTPClient().post('', params);
    }
}