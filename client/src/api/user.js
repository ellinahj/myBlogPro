import apiSend from '../utils/apiSend';

const findNickname = (config, data) => {
  return apiSend({
    url: `/user/nickname`,
    method: 'post',
    headers: config,
    data: data
  });
};
const updateInfo = (config, data) => {
  return apiSend({
    url: `/user/update/info`,
    method: 'post',
    headers: config,
    data: data
  });
};
const checkPwd = (config, data) => {
  return apiSend({
    url: `/user/pwd`,
    method: 'post',
    headers: config,
    data: data
  });
};
const updatePwd = (config, data) => {
  return apiSend({
    url: `/user/update/pwd`,
    method: 'post',
    headers: config,
    data: data
  });
};

export { findNickname, updateInfo, checkPwd, updatePwd };
