import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

const api = {
  get: (endingPoint) => axios.get(url + endingPoint),
  post: (endingPoint, data) => axios.post(url + endingPoint, data),
  delete: (endingPoint) => axios.delete(url + endingPoint),
};

export default api;
