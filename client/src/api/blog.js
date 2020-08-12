import apiSend from '../utils/apiSend';

const getCate = config => {
  return apiSend({
    url: `/category`,
    method: 'get',
    headers: config
  });
};
const setBlog = (config, data) => {
  return apiSend({
    url: `/blog/write/`,
    method: 'post',
    headers: config,
    data: data
  });
};
const getBlog = (config, id) => {
  return apiSend({
    url: `/blog/read/${id}`,
    method: 'get',
    headers: config
  });
};
const getSearchedBlog = (config, cateId, value) => {
  return apiSend({
    url: `/blog/read/search/${cateId}/${value}`,
    method: 'get',
    headers: config
  });
};

const deleteBlog = (config, data) => {
  console.log(data, 'data');
  return apiSend({
    url: `/blog/delete/`,
    method: 'post',
    headers: config,
    data: data
  });
};

export { getCate, setBlog, getBlog, getSearchedBlog, deleteBlog };
