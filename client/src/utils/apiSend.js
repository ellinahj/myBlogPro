import axios from 'axios';
import Router from 'next/router';
import store from '../store';
import { setUserInfo, setThemeColor, setFont, setLoading } from '../actions/base';
const localURL = 'http://127.0.0.1:3000';
const proURL = 'http://api.hyunjung.site';
const instance = axios.create({
  baseURL: `${proURL}/api`,
  timeout: 20000
});

instance.interceptors.request.use(
  function(config) {
    if (config.url !== '/user/nickname' && config.url !== '/user/pwd' && config.url !== '/auth/findId') {
      store.dispatch(setLoading(true));
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function(response) {
    if (
      response.config.url !== '/user/nickname' &&
      response.config.url !== '/user/pwd' &&
      response.config.url !== '/auth/findId'
    ) {
      store.dispatch(setLoading(false));
    }
    // http status가 200인 경우
    // 응답 바로 직전에 대해 작성
    // .then()

    return response;
  },

  function(error) {
    /*
        http status가 200이 아닌 경우
        응답 에러 처리
        .catch()
    */
    if (error.response) {
      store.dispatch(setLoading(false));
      if (error.response.status === 401) {
        if (!(error.response.data.message === 'Mismatched pwd')) {
          alert('아이디나 비밀번호를 확인해주세요.');
        }
      } else if (error.response.status === 400) {
        Router.push('/login');
        store.dispatch(setUserInfo(undefined));
        store.dispatch(setFont(undefined));
        store.dispatch(setThemeColor('#e36f63'));
      } else if (error.response.status === 404) {
        alert('누락된 요청');
      } else if (error.response.status >= 500) {
        alert('서버 에러가 발생했습니다.관리자에게 문의해주세요.');
      }
    }
    return Promise.reject(error);
  }
);
export default instance;
