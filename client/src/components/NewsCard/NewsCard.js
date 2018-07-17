import React from 'react';
import './NewsCard.css';
import '../ArticleButton';
import ArticleButton from '../ArticleButton/ArticleButton';

const NewsCard = (props) => {
  const newDate = new Date(props.date);
  return (
  <div className="news-card">
    <h2 className="news-header">{props.title}</h2>
    <p>{newDate.toDateString() + ' ' + newDate.toTimeString().slice(0,17)}</p>
    <div className="card-container">
      <div className="news-body">
        <p className="summary">{props.summary}</p>
        <a href={props.url} target="_blank">View on NYT</a>
      </div>
      <ArticleButton message={props.message} onClick={props.onClick}/>
    </div>
  </div>
  );
};

export default NewsCard;