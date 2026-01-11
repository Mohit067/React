import { createContext, useContext, useEffect, useState } from "react";
import api from "../config/axios";

// create context
const NewsContext = createContext();



// provide a context
export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_key = import.meta.env.VITE_API_KEY;
  // console.log(api_key);

  const fetchData = async (url = `/everything?q=india`) => {
    setLoading(true)
    try {
      const response = await api.get(`${url}&apiKey=${api_key}`);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const value = {
    news,
    setNews,
    fetchData,
    loading
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};



// use the context
export const useNewsContext = () => {
  return useContext(NewsContext);
};
