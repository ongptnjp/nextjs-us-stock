import React from "react";

const News = props => {
  const { news } = props;

  const extractDateInformation = timestamp => {
    if (!timestamp) return null;
    const date = new Date(timestamp);
    return {
      day: date.getDay(),
      month: date.getMonth(),
      year: date.getFullYear()
    }
  }
  
  const {day, month, year} = extractDateInformation(news.datetime);

  return (
    <div className="example-2 card">
        <div className="wrapper" style={{ background: `url(${news.image}) center / cover no-repeat`}}>
          <div className="header">
            <div className="date">
              <span className="day">{day}</span>
              <span className="month">{month}</span>
              <span className="year">{year}</span>
            </div>
          </div>
          <div className="data">
            <div className="content">
              <span className="author">{news.source}</span>
              <h2 className="title"><a href={news.url}>{news.headline}</a></h2>
              <p className="text">{news.summary}</p>
              <a href={news.url} className="button">Read more</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default News;
