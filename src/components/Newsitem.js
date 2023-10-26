import React from "react";

export default function Newsitem(props) {
 
    let { title, description, image, url, time, source } = props;
    return (
      <div className="my-3">
        <div className="card-deck">
          <div className="card">
            <div>
              <span
                className=" badge rounded-pill bg-danger"
                style={{ right: 0, position: "absolute" }}
              >
                {source}
              </span>
            </div>
            <img src={image} className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  Posted on {new Date(time).toGMTString()}
                </small>
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


