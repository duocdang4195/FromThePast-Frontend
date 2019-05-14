
import axios from 'axios';
import store from '@/store';

export const composeApi = (options = {}) => {
  const instance = axios.create({
    baseURL: `http://tuquakhu.com/api`,
    timeout: 120000,
    headers: {
      'Access-Control-Allow-Origin': '*', 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
  instance.interceptors.response.use(
    res => res,
    err => {
      if (err.response.status === 400) {
        store.dispatch('logout');
      }
      return Promise.reject(err);
    },
  );
  return instance;
}

export default composeApi();