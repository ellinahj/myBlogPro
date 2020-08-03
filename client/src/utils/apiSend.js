import axios from 'axios';
import Router from 'next/router';
import store from '../store';
import styled from 'styled-components';
import { setUserInfo, setLogin, setThemeColor, setLoading, setLoding } from '../actions/base';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001/api',
  timeout: 3000
});

instance.interceptors.request.use(
  function(config) {
    store.dispatch(setLoding(true));
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function(response) {
    // http status가 200인 경우
    // 응답 바로 직전에 대해 작성
    // .then()
    store.dispatch(setLoding(false));
    store.dispatch(setLogin(true));
    return response;
  },

  function(error) {
    /*
        http status가 200이 아닌 경우
        응답 에러 처리
        .catch()
    */
    if (error.response) {
      if (error.response.status === 401) {
        if (!(error.response.data.message === 'Mismatched pwd')) {
          alert('아이디나 비밀번호를 확인해주세요.');
        }
      } else if (error.response.status === 400) {
        store.dispatch(setLogin(false));
        store.dispatch(setUserInfo(undefined));
        store.dispatch(setThemeColor(''));
        Router.push('/login');
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
const Loading = styled.img`
  position: absolute;
  z-index: 101;
  width: 64px;
  height: 64px;
  top: 50%;
  left: 50%;
`;
