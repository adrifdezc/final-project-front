import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Landing from "./Landing/background.jpeg";

function News() {
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
      number: "20",
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

      setNews(response.data.data.results);
    };
    fetchNews();
    // eslint-disable-next-line
  }, []);

  return (
    <Carousel fade>
      {news?.map((article, index) =>
        index === 0 ? (
          <Carousel.Item key={index} className="carousel-item active">
            <img
              className="d-block w-100"
              style={{ width: "100%" }}
              // src={Landing}
              src={article.image}
              alt={article.title}
            />
            <Carousel.Caption>
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url}>
                {" "}
                <h3>Read More</h3>{" "}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ) : (index !== 2 && index !==3 && index !== 9 && index !==7) ? (
          <Carousel.Item key={index} className="carousel-item">
            <img
              className="d-block w-100"
              style={{ width: "100%" }}
              // src={Landing}
              src={article.image}
              alt={article.title}
            />
            <Carousel.Caption>
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url}>
                {" "}
                <h3>Read More</h3>{" "}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ) :  null
      )}
    </Carousel>

    // <div className="text-center">
    // <h1>Latest news</h1>
    // <div className="row News-row pb-5 m-5">
    //   {news?.map((article,index)=>(
    //     <div key={index} className="card News shadow col-5 ">
    //         <img className="p-3" src={article.image} alt=""/>
    //         <h4>{article.title}</h4>
    //         <h6>{article.description}</h6>
    //         <a href={article.url}> <h3>Read More</h3> </a>

    //     </div>
    //   ))}
    // </div>
    // </div>
  );
}

export default News;
