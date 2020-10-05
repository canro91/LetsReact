import axios from 'axios';

const request = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY
    }
});

const search = (searchTerm) =>
    request.get('search', {
        params: {
            q: searchTerm
        }
    });

export default search;