import store from '@/store';
import api from '@/plugins/axios';

export const commonApiIntercept = (api) => {
  api.interceptors.request.use((config) => {
    const token = store.getters.accessToken;
    if (token) {
      config.headers =  {
        'Access-Control-Allow-Origin': '*', 
        'content-type': 'application/json',
        'common': {
          'Authorization' : "Bearer "+localStorage.getItem('token')
        }
      }
    }
    // config.headers['Cache-Control'] = 'no-cache,no-store,must-revalidate,max-age=-1,private';
    return config;
  }, err => Promise.reject(err));
};


export default function setup() {
  commonApiIntercept(api);
}
