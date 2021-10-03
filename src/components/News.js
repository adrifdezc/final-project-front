import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function News() {
  const storedToken = localStorage.getItem("authToken");
  const [news, setNews] = useState();

//   const options = {
//     method: "GET",
//     url: "https://bing-news-search1.p.rapidapi.com/news/search",
//     params: {
//       q: "cocktails &drink",
//       freshness: "Day",
//       textFormat: "Raw",
//       safeSearch: "Off",
//     },
//     headers: {
//       "x-bingapis-sdk": "true",
//       "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
//       "accept-language": "en",
//       "x-rapidapi-key": "dbdd362db9msh4f2f00a32709170p14d716jsn5c5812a9557b",
//     },
//   };

const options = {
  method: "GET",
  url: "https://webit-news-search.p.rapidapi.com/search",
  params: {
    q: "cocktails",
    language: "en",
    number: "2",
    offset: "2",
    has_image: "true",
  },
  headers: {
    "x-rapidapi-host": "webit-news-search.p.rapidapi.com",
    "x-rapidapi-key": "dbdd362db9msh4f2f00a32709170p14d716jsn5c5812a9557b",
  },
};

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios(options);

      setNews(response.data.data.results)
      console.log("Data", response.data.value);
    };
    fetchNews();
  },[]);

  return (
    <div className="text-center">
    <h1>Latest news</h1>
    <div className="row m-5">
      {news?.map((article)=>(
          <>
        <div className="card News col-6 ">
            <img src={article.image} alt=""/>
            <h4>{article.title}</h4>
            <h6>{article.description}</h6>
            <a href={article.url}> <h3>Read More</h3> </a>
        </div>
        </>
      ))}
    </div>
    </div>
  );
}

export default News;
