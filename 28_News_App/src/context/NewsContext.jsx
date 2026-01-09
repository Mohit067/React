import { createContext, useContext, useEffect, useState } from "react";
import api from "../config/axios";

// create context
const NewsContext = createContext();

// provide a context
export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const api_key = import.meta.env.VITE_API_KEY;
  // console.log(api_key);

  const fetchData = async (url = `/everything?q=india`) => {
    try {
      const response = await api.get(`${url}&apiKey=${api_key}`);
      return response.data;
    } catch (error) {
        console.log(error);
    }
  };

  const value = {
    news,
    setNews,
    fetchData,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

// use the context
export const useNewsContext = () => {
  return useContext(NewsContext);
};
