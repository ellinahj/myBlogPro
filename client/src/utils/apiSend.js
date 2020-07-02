import axios from 'axios';
import Router from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import store from '../store';
import styled from 'styled-components';
import spinner from '../../static/images/spinner.svg';
import { setUserInfo, setLogin, setThemeColor, setLoading, setLoding } from '../actions/base';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001/api',
  timeout: 3000
});

instance.interceptors.request.use(
  function(config) {
    // 요청 바로 직전
    // axios 설정값에 대해 작성
    // store.dispatch(setLoding(true));
    return config;
  },
  function(error) {
    // 요청 에러 처리를 작성
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function(response) {
    // http status가 200인 경우
    // 응답 바로 직전에 대해 작성
    // .then()
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
        alert('아이디나 비밀번호를 확인해주세요.');
      } else if (error.response.status === 400) {
        store.dispatch(setLogin(false));
        store.dispatch(setUserInfo(undefined));
        store.dispatch(setThemeColor(''));
        Router.push('/login');
      } else if (error.response.status === 404) {
        alert('404 누락된 요청');
        Router.push('/login');
      } else if (error.response.status >= 500) {
        alert('서버 에러');
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
