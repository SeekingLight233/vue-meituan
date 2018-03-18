import config from '../config'
import router from '@/router'

const baseURL = config.baseURL;
const axios = require('axios').create({
  baseURL: baseURL,            //api请求的baseURL
  timeout: 0,
  withCredentials: false, // 允许跨域 cookie
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  transformResponse: [function (data) {
    try {
      data = JSON.parse(data);
    } catch (e) {
      data = {};
    }
    if (data.status === 401) {
      localStorage.removeItem('mt-username');
      router.push('/login');
    }

    return data;
  }]
})

// get
export const _get = (req) => {
  return axios.get(req.url, {params: req.data})
}

// post
export const _post = (req) => {
  return axios({method: 'post', url: `/${req.url}`, data: req.data})
}

//patch
export const _put = (req) => {
  return axios({method: 'put', url: `/${req.url}`, data: req.data})
}

//delete
export const _delete = (req) => {
  return axios({method: 'delete', url: `/${req.url}`, data: req.data})
}
