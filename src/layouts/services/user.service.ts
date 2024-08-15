import axios from 'axios';
import authHeader from './authHeader';

const URL = 'http://localhost:8080/test/';

export const getPublicContent = () => {

    return axios.get(URL + 'all');

}

export const getUserBoard = () => {

    return axios.get(URL + 'user', { headers:authHeader()});

}