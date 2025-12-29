import axios from "axios";

const request = (options) => {
  const token = options.token || null;

  const headers = {
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const finalOptions = {
    ...options,
    headers,
  };

  return axios(finalOptions);
};

export default request;
