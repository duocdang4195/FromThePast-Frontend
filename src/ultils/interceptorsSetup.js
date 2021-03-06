import store from '@/store';
import api from '@/plugins/axios';

export const commonApiIntercept = (api) => {
  api.interceptors.request.use((config) => {
    const token = store.getters.accessToken;
    if (token) {
      config.headers =  {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'common': {
          'Authorization' :  `Bearer ${token}`
        }
      }
    }
    return config;
  }, err => Promise.reject(err));
};


export default function setup() {
  commonApiIntercept(api);
}
