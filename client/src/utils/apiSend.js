import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001/api',
  timeout: 1000
});

instance.interceptors.request.use(
  function(config) {
    // 요청 바로 직전
    // axios 설정값에 대해 작성
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
    return response;
  },

  function(error) {
    /*
        http status가 200이 아닌 경우
        응답 에러 처리
        .catch()
    */
    return Promise.reject(error);
  }
);
export default instance;
