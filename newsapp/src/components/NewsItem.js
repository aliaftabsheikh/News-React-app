import React from "react";


const NewsItem = (props)=> {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  
    return (
      <div className="m-3" style={{ width: "18rem", zIndex: '2' }}>
        <div className=" card " style={{ width: "18rem" }}>
          <div style ={{display : 'flex', justifyContent : 'flex-end', position : 'absolute', right : '0'}}>
            <span className="badge  bg-danger">
              {source}
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className=" container card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By <strong>{!author ? "Unknown" : author}</strong> on{" "}
                <strong>{new Date(date).toGMTString()}</strong>
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
