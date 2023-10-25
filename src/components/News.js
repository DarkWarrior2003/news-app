import React, { Component } from "react";
import Newsitem from "./Newsitem";
// import PropTypes from "prop-types";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      artciles: [],
      loading: false,
      pages: 1,
    };
  }


  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc8b498b1c224e218245a717f9f59d2d&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      artciles: parsedata.articles,
      totalResults: parsedata.totalResults,
    });
  }
  handlenextclick = async () => {
    if (this.state.pages + 1 > Math.ceil(this.state.totalResults / 5)) {
    }
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=fc8b498b1c224e218245a717f9f59d2d&page=${
      this.state.pages + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      pages: this.state.pages + 1,
      artciles: parsedata.articles,
    });
  };

  handlepreviousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=fc8b498b1c224e218245a717f9f59d2d&page=${
      this.state.pages - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      pages: this.state.pages - 1,
      artciles: parsedata.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Top Headlines</h2>

        <div className="row">
          {this.state.artciles.map((elements) => {
            return (
              <div className="col-md-4" key={elements.url}>
                <Newsitem
                  title={elements.title}
                  description={elements.description}
                  image={elements.urlToImage}
                  url={elements.url}
                  time={elements.publishedAt}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.pages <= 1}
              class="btn btn-primary btn-sm"
              onClick={this.handlepreviousclick}
              type="submit"
            >
              &larr; Previous
            </button>
            <button
              class="btn btn-primary btn-sm"
              onClick={this.handlenextclick}
              type="submit"
              disabled={
                this.state.pages + 1 > Math.ceil(this.state.totalResults / 5)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
