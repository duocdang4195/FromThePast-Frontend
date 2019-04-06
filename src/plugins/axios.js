import axios from 'axios';

export const composeApi = (options = {}) => {
  const instance = axios.create({
    baseURL: `http://tuquakhu.com/api`,
    timeout: 120000,
    headers: {
      accept: 'application/json',
    },
  });
  return instance;
}

export default composeApi();
