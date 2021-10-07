import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

function News() {
  const [news, setNews] = useState();


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
      "x-rapidapi-host": process.env.REACT_APP_API_KEY_HOST_NEWS,
      "x-rapidapi-key": process.env.REACT_APP_API_KEY_NEWS,
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
    <>
    <h1 className="text-center mt-5">DID YOU KNOW?</h1>
    <Carousel fade>
      {news?.map((article, index) =>
        //Only the first one can be "active"
        index === 0 ? (
          <Carousel.Item key={index} className="carousel-item active">
            <img
              className="d-block w-100"
              style={{ width: "100%" }}
              src={article.image}
              alt={article.title} />
            <Carousel.Caption>
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url}>
                {" "}
                <h3>Read More</h3>{" "}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          //Avoid not related news with cocktails
        ) : (index !== 2 && index !== 3 && index !== 7 && index !== 6 && index !== 9) ? (
          <Carousel.Item key={index} className="carousel-item">
            <img
              className="d-block w-100"
              style={{ width: "100%" }}
              src={article.image}
              alt={article.title} />
            <Carousel.Caption>
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url}>
                {" "}
                <h5>Read More</h5>{" "}
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ) : null
      )}
    </Carousel></>
  );
}

export default News;
