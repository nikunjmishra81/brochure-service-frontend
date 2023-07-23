import axios from "axios";

const get = (url, headers) => {
  return axios.get(url, {
    headers: {
      ...headers,
    },
  });
};

const post = (url, data = {}, headers = {}, config = {}) => {
  return axios.post(url, data, {
    headers: {
      ...headers,
    },
    ...config,
  });
};


export default {
  get,
  post,
};
