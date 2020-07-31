import apiSend from '../utils/apiSend';

const updateCate = (config, data) => {
  return apiSend({
    url: '/category',
    method: 'post',
    data: data
  });
};

export { updateCate };
