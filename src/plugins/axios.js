import axios from 'axios';
import store from '@/store';

export const composeApi = (options = {}) => {
  const instance = axios.create({
    baseURL: `http://tuquakhu.com/api`,
    timeout: 120000,
    headers: {
      'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'
    },
  });
  instance.interceptors.response.use(
    res => res,
    err => {
      if (err.response.status === 401) {
        store.dispatch('logout');
      }
      return Promise.reject(err);
    },
  );
  return instance;
}

export default composeApi();
