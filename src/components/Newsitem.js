import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, image, url, time } = this.props;
    return (
      <div className="my-3">
        <div className="card-deck">
          <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">Posted on {time}</small>
              </p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
