import apiSend from '../utils/apiSend';

const getCate = config => {
  return apiSend({
    url: `/category`,
    method: 'get',
    headers: config
  });
};
const getBlog = (config, id) => {
  return apiSend({
    url: `/blog/read/${id}`,
    method: 'get',
    headers: config
  });
};

export { getCate, getBlog };
