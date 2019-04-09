import axios from 'axios';

export const composeApi = (options = {}) => {
  const instance = axios.create({
    baseURL: `http://tuquakhu.com/api`,
    timeout: 120000,
    headers: {
      'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'
    },
  });
  return instance;
}

export default composeApi();
