import apiSend from '../utils/apiSend';

const findId = data => {
  return apiSend({
    url: '/auth/findId',
    method: 'post',
    data: data
  });
};

const login = data => {
  return apiSend({
    url: '/auth/login',
    method: 'post',
    data: data
  });
};
const loginCheck = config => {
  return apiSend({
    url: '/user/info',
    method: 'get',
    headers: config
  });
};
const join = data => {
  return apiSend({
    url: '/auth/join',
    method: 'post',
    data: data
  });
};

export { findId, login, loginCheck, join };
