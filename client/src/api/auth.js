import apiSend from '../utils/apiSend';

const login = data => {
  return apiSend({
    url: '/auth/login',
    method: 'post',
    data: data
  });
};

export { login };
