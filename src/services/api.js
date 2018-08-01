import axios from 'axios';

//todo: remove
import makes from './makes.json';
import carOfTheWeek from './carOfTheWeek.json';
import models from './models.json';

const baseURL = process.env.API_BASE_URL;
const timeout = 5000;

export const getCarOfTheWeek = () => {
  const url = `api/carOfTheWeek`;

  // return {data: carOfTheWeek};
  return axios({
    method: 'GET',
    baseURL: baseURL,
    url,
    timeout: timeout
  });
}

export const getMakes = () => {
  const url = `api/makes`;

  // return {data: makes};
  return axios({
    method: 'GET',
    baseURL: baseURL,
    url,
    timeout: timeout
  });
}

export const getModels = () => {
  const url = `api/models`;

  // return {data:models};
  return axios({
    method: 'GET',
    baseURL: baseURL,
    url,
    timeout: timeout
  });
}
