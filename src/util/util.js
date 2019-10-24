import axios from 'axios';
import qs from 'qs';
import { baseURL_test, baseURL_prd, getTokenParams } from '../config';
import { Base64 } from 'js-base64';

export function getToken() {
  const postData = {
    username: getTokenParams.username,
    password: getTokenParams.password,
    grant_type: getTokenParams.grant_type,
  };

  const axios_getToken = axios.create({
    baseURL: process.env.NODE_ENV === 'develop' ? baseURL_test : baseURL_prd,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': 'Basic ' + Base64.encode(`${getTokenParams.clientId}:${getTokenParams.clientSecret}`),
    }
  });

  axios_getToken.post('/oauth/token', qs.stringify(postData)).then(res => {
    if (res.status === 200 && res.data && res.data.access_token) {
      const access_token = res.data.access_token;
      localStorage.setItem('token', access_token);
    } else {
      console.log('获取 Token 失败！')
    }
  });
}