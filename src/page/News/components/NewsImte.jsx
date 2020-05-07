import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function NewsItem(props) {
  const { title, date, info, imgUrl, path } = props;
  return (
    <div className="news-item">
      <div className="news-item__left">
        <Link className="news-item__left-title" to={path}>
          {title}
        </Link>
        <p className="news-item__left-date">{date}</p>
        <p className="news-item__left-info">{info}</p>
      </div>
      <div className="news-item__right">
        <img src={imgUrl} alt="img" />
      </div>
    </div>
  );
}
export default NewsItem;
