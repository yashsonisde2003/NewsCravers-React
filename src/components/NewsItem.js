import React from "react";

const NewsItem=(props)=>  {
  
    let { title, description, ImageUrl, Url, author, time } = props;
    return (
      <div>
        <div className="card" style={{ width: "20rem",
      margin:'auto' }}>
          <img
            src={
              ImageUrl
                ? ImageUrl
                : "https://img.freepik.com/free-vector/press-mass-media-broadcasting-studio-journalists-reporters-characters-hot-online-information-breaking-news-headline-news-content-concept_335657-1188.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author} at {time}
              </small>
            </p>
            <a
              href={Url}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              read more
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
