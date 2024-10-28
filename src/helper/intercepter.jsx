import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.quicksell.co/v1",
  headers: {},
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
