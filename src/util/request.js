import axios from 'axios';
import { baseURL_test, baseURL_prd, getTokenParams } from '../config';
import { Toast } from 'vant';
import { getToken } from './util';

// 请求初始配置
const request = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : baseURL_prd,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    token && (config.headers.Authorization = `Bearer ${token}`);
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  // 请求成功
  res => {
      if(res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
  },
  // 请求失败
  error => {
      if (error.response.status) {
        switch (error.response.status) {
          case 401: 
          case 403:
            {
              Toast.fail({
                message: '页面过期，请重试！',
                forbidClick: true
              });
              localStorage.removeItem('token');
              getToken();
              break;
            } 
          case 404: 
            {
              {
                Toast.fail({
                  message: '请求不存在！',
                  forbidClick: true
                });
                break;
              }
            }
          default:
            {
              Toast({
                message: error.response.data.message || '系统错误，请联系管理员！',
                forbidClick: true
              })
            }
        }
      }
      return Promise.reject(error.response);
  }
)

export default request;

