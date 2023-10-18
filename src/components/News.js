import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const { setProgress } = props;

  const updateNews = async () => {
    setProgress(30);
    const { country, category, newscounter, apikey } = props;

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}7pageSize=${newscounter}`;

    setloading(true);
    setProgress(50);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setarticles(data.articles);
      settotalResults(data.totalResults);
      setloading(false);

      setProgress(70);
    } catch (error) {
      console.error("Error fetching data:", error);
      setloading(false);
    }
    setProgress(100);
  };
  useEffect(() => {
    document.title = `NewsCravers - ${props.category}`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const { country, category, newscounter, apikey } = props;

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${
      page + 1
    }&pageSize=${newscounter}`;
    setpage(page + 1);

    setloading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setarticles(articles.concat(data.articles));
      settotalResults(data.totalResults);
      setloading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setloading(false);
    }
    console.log(url);
  };

  return (
    <>
      <h2
        className="text-center"
        style={{ marginTop: "88px", marginBottom: "17px" }}
      >
        NewsCravers - Top Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col md-1" key={element.url}>
                  <NewsItem
                    title={element.title || ""}
                    description={element.description || ""}
                    ImageUrl={element.urlToImage}
                    Url={element.url}
                    author={element.author || "Unknown"}
                    time={new Date(element.publishedAt).toUTCString()}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
