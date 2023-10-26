import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";

// import PropTypes from "prop-types";
export default function News(props) {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updatenews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cd51fedc3e9d4b05a3af551c200c5173&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(parsedata.articles);
    settotalResults(parsedata.totalResults);
  };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=cd51fedc3e9d4b05a3af551c200c5173&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(articles.concat(parsedata.articles));
    settotalResults(parsedata.totalResults);
  };

  useEffect(() => {
    return () => {
      updatenews();
    };
  }, []);

  // handlenextclick = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=cd51fedc3e9d4b05a3af551c200c5173&page=${
  //     this.state.page + 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   this.setState({
  //     articles: parsedata.articles,
  //     totalResults: parsedata.totalResults,
  //   });
  // };

  // handlepreviousclick = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=cd51fedc3e9d4b05a3af551c200c5173&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   this.setState({
  //     articles: parsedata.articles,
  //     totalResults: parsedata.totalResults,
  //   });
  // };

  return (
    <div className="my-3">
      <h2 className="text-center" style={{ marginTop: "90px" }}>
        Top Headlines
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4 className="text-center">Loading...</h4>}
      >
        <div className="container">
          <div className="row">
            {articles.map((elements) => {
              return (
                <div className="col-md-4" key={elements.url}>
                  <Newsitem
                    title={elements.title}
                    description={elements.description}
                    image={elements.urlToImage}
                    url={elements.url}
                    time={elements.publishedAt}
                    source={elements.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
