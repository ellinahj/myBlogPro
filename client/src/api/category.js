import apiSend from '../utils/apiSend';

const updateCate = (config, data) => {
  return apiSend({
    url: '/category/update',
    method: 'post',
    headers: config,
    data: data
  });
};
const deleteCate = (config, data) => {
  return apiSend({
    url: '/category/delete',
    method: 'post',
    headers: config,
    data: data
  });
};

export { updateCate, deleteCate };
