import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000
});

instance.interceptors.request.use(function (request) {
  let acessToken = localStorage.getItem("accesstoken") || null
  if(acessToken != null){
      request.headers.Authorization = "Baerer " + acessToken
  }
  return request;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with request error
  console.log(error)
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log(response)
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error)
  return Promise.reject(error);
});

export default instance