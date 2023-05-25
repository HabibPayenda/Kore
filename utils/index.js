import axios from "axios";
export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};

const PropertiesApi = axios.create({
  baseURL: process.env.api,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

PropertiesApi.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("token");
    token = token.replace(/['"]+/g, "");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response.message);
  }
);

export default PropertiesApi;
