import apiSend from '../utils/apiSend';

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
export { login, loginCheck };
