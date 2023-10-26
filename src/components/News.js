import React, { Component } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";

// import PropTypes from "prop-types";
export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updatenews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e9e8f3865584f969407548074e99235&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
    });
  }
  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=5e9e8f3865584f969407548074e99235&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      page: this.state.page + 1,
    });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
    });
  };

  async componentDidMount() {
    this.updatenews();
  }
  // handlenextclick = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=5e9e8f3865584f969407548074e99235&page=${
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
  //   }&apiKey=5e9e8f3865584f969407548074e99235&page=${
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

  render() {
    return (
      <div className="my-3">
        <h2 className="text-center" style={{ marginTop: "90px" }}>
          Top Headlines
        </h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4 className="text-center">Loading...</h4>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((elements) => {
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
}

export default News;
