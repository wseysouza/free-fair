import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://parseapi.back4app.com/parse/classes',
    headers: {
        'X-Parse-Application-Id': 'OnWCZ6MPODt0PVsLMuW5f34iFdZt76dF0oHttwME',
        'X-Parse-REST-API-Key': 'rU3EuoZKZLfFWKCYtAxZXDdS4cyukVvDgiFKcsRE',
        'Content-Type': 'application/json'
    },
    timeout: 100,
})

