import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsCard } from "../pages/News";

const Sidebar = ({ onClose }) => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=01a234741c7f47f6be6ef2b1b6f6e0b4"
      );
      setTopHeadlines(response.data.articles);
    })();
  }, []);

//   console.log(topHeadlines);

  return (
    <div className="fixed inset-0 z-30 flex justify-end">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Sidebar */}
      <div className="relative w-80 bg-base-200 h-full shadow-lg flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle absolute right-3 top-3 z-10"
        >
          ✕
        </button>

        {/* Scrollable content */}
        <div className="mt-12 overflow-y-auto flex-1 pr-2">
          <ul className="menu">
            {topHeadlines.map((headline, index) => (
              <NewsCard key={index} details={headline} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
