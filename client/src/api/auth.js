import apiSend from '../utils/apiSend';
export default {
  login(data) {
    return apiSend({
      url: '/auth/login',
      method: 'post',
      data: data
    });
  }
};
