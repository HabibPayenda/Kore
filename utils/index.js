import axios from "axios";
export const checkImageURL = (url) => {
  if (!url || url.trim() === "") return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    if (!pattern.test(url)) return false;
    return true;
  }
};

const PropertiesApi = axios.create({
  baseURL: "http://10.10.10.236:3000/api/v1",
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

PropertiesApi.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error.response.message);
  }
);

export default PropertiesApi;
