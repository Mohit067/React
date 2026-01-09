import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import api from "../config/axios";
import { useNewsContext } from "../context/NewsContext";

const News = () => {
  const { news, setNews, fetchData } = useNewsContext();

  useEffect(() => {
    (async() => {
      let data = await fetchData();
      setNews(data.articles);
    })()
  },[]);

  console.log(news);
  return (
    <div className="my-4">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-4 ">
          {news.map((newsDetails, index) => {
            if(!newsDetails.urlToImage) return null;
            return <NewsCard key={index} details={newsDetails} />
          })}
          
        </div>
      </Wrapper>
    </div>
  );
};

const NewsCard = ({details}) => {
  // console.log(details.content);
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="aspect-video object-contain w-full"
          src={details?.urlToImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="line-clamp-2 text-2xl">{details.title}</h2>
        <p className="line-clamp-3">
          {details.description}
        </p>
        <div className="card-actions justify-end">
          <button onClick={() => window.open(details?.url)} className="btn btn-outline">Read More</button>
        </div>
      </div>
    </div>
  );
};
export default News;
