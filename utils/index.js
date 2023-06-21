import axios from "axios";

import { useState, useEffect } from "react";

export const useTypewriter = (texts, delay = 1000) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const text = texts[currentTextIndex];
      if (currentText.length < text.length) {
        setCurrentText((prevText) => prevText + text.charAt(prevText.length));
      } else if (currentText.length === text.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentText("");
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, delay);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentText, currentTextIndex, delay, texts]);

  return currentText;
};

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

export const PropertiesApiImage = axios.create({
  baseURL: "http://10.10.10.236:3000/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

PropertiesApiImage.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error.response.message);
  }
);
