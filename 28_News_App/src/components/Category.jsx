import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = () => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const { news, setNews, fetchData } = useNewsContext();
  //   console.log(news);

  const handleNews = async (e) => {
    const categoryy = e.target.value;
    const response = await fetchData(`/everything?q=${categoryy}`);
    setNews(response.articles);
  };

  return (
    <div className="sticky top-16 z-10 bg-base-100">
      <Wrapper>
        <div className="max-w-full w-fit m-auto overflow-x-auto overflow-hidden flex scrollbar-none px-5 gap-2">
          {categories.map((category, index) => {
            return (
              <button
                onClick={handleNews}
                value={category}
                key={index}
                className="btn btn-active btn-primary"
              >
                {category}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
